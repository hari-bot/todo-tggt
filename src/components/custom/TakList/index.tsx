import React from 'react';
import TaskItem from '../TaskItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';

function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleEdit = (id: string) => {
    console.log(`Edit task with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete task with id: ${id}`);
  };

  const handleCheck = (id: string) => {
    console.log(`Toggle checkbox for task with id: ${id}`);
  };

  function getIndicatorType(taskDate: string): 'expired' | 'today' | 'upcoming' {
    const today = new Date();
    const taskDateObj = new Date(taskDate);

    if (taskDateObj.toDateString() === today.toDateString()) {
      return 'today';
    } else if (taskDateObj < today) {
      return 'expired';
    } else {
      return 'upcoming';
    }
  }

  return (
    <div className="mt-14 p-3 overflow-y-auto h-full">
      <ul className="space-y-5">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            indicatorType={getIndicatorType(task.date)}
            title={task.title}
            date={task.date}
            isChecked={task.completed}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
            onCheck={() => handleCheck(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
