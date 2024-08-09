import React from 'react';
import TaskItem from '../TaskItem';

interface Task {
  id: number;
  indicatorType: 'upcoming' | 'today' | 'expired';
  title: string;
  date: string;
  isChecked: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    indicatorType: 'upcoming',
    title: 'Work Out',
    date: '02-08-2024',
    isChecked: false,
  },
  {
    id: 2,
    indicatorType: 'upcoming',
    title: 'Work Out',
    date: '02-08-2024',
    isChecked: false,
  },
  {
    id: 3,
    indicatorType: 'today',
    title: 'Hand off Project',
    date: '02-08-2024',
    isChecked: true,
  },
  {
    id: 4,
    indicatorType: 'expired',
    title: 'Read 5 pages of "sprint"',
    date: '15-08-2024',
    isChecked: false,
  },
];

function TaskList() {
  const handleEdit = (id: number) => {
    console.log(`Edit task with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete task with id: ${id}`);
  };

  const handleCheck = (id: number) => {
    console.log(`Toggle checkbox for task with id: ${id}`);
  };

  return (
    <div className="mt-14 p-3 overflow-y-auto h-full">
      <ul className="space-y-5">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            indicatorType={task.indicatorType}
            title={task.title}
            date={task.date}
            isChecked={task.isChecked}
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
