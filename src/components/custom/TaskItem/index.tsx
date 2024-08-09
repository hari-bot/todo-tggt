import React from 'react';
import Indicator from '../../base/Indicator';
import IconButton from '../../base/IconButton';
import Checkbox from '../../base/CheckBox';
import { MdOutlineDeleteOutline } from 'react-icons/md';

interface TaskItemProps {
  indicatorType: 'upcoming' | 'today' | 'expired';
  title: string;
  date: string;
  isChecked: boolean;
  onDelete: () => void;
  onCheck: () => void;
}

function TaskItem({ indicatorType, title, date, isChecked, onDelete, onCheck }: TaskItemProps) {
  return (
    <li className="flex items-center bg-white rounded-2xl px-2 py-3">
      <div className="flex space-x-2 mr-2">
        <Indicator type={indicatorType} />
      </div>
      <p className="flex-grow text-gray-500 font-medium">{title}</p>
      <span className="mr-2 text-gray-500 text-sm font-semibold">{date}</span>
      <IconButton className="text-red-400 hover:text-red-600" onClick={onDelete}>
        <MdOutlineDeleteOutline />
      </IconButton>
      <Checkbox isChecked={isChecked} onClick={onCheck} />
    </li>
  );
}

export default TaskItem;
