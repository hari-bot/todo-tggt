import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../components/shared/SideBar';
import AddTask from '../../components/custom/AddTask';
import TaskList from '../../components/custom/TakList';
import { RootState } from '../../state/store';
import { Task } from '../../state/tasks/taskSlice';

const isToday = (taskDate: string): boolean => {
  const today = new Date();
  const taskDateObj = new Date(taskDate);
  return taskDateObj.toDateString() === today.toDateString();
};

const getNearestUpcomingTask = (tasks: Task[]): Task | null => {
  const today = new Date();
  const upcomingTasks = tasks
    .filter((task) => new Date(task.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcomingTasks.length > 0 ? upcomingTasks[0] : null;
};

function HomePage() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const userName = useSelector((state: RootState) => state.user.userName);

  const todayTasks = tasks.filter((task) => isToday(task.date));
  const nearestUpcomingTask = getNearestUpcomingTask(tasks);
  const highlightedTask = todayTasks.length > 0 ? todayTasks[0] : nearestUpcomingTask;

  return (
    <div className="flex h-screen">
      <SideBar name={userName} />
      <div className="w-[80%] bg-[#a18aff] py-10 px-20 flex flex-col">
        <h1 className="text-gray-100 text-3xl font-bold">Today Main Focus</h1>
        <h1 className="text-white text-4xl font-bold">
          {highlightedTask ? `${highlightedTask.title}` : 'No tasks available'}
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default HomePage;
