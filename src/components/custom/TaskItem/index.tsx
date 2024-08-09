import React from 'react';
import Indicator from '../../base/Indicator';
import IconButton from '../../base/IconButton';
import Checkbox from '../../base/CheckBox';
import { MdModeEdit, MdOutlineDeleteOutline } from 'react-icons/md';

interface TaskItemProps {
  indicatorType: 'upcoming' | 'today' | 'expired';
  title: string;
  date: string;
  isChecked: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onCheck: () => void;
}

function TaskItem({ indicatorType, title, date, isChecked, onEdit, onDelete, onCheck }: TaskItemProps) {
  return (
    <li className="flex items-center bg-white rounded-2xl px-2 py-3">
      <div className="flex space-x-2 mr-2">
        <Indicator type={indicatorType} />
      </div>
      <p className="flex-grow text-gray-500 font-medium">{title}</p>
      <span className="mr-2 text-gray-500 text-sm font-semibold">{date}</span>

      <IconButton className="text-[#CA8BFE] hover:text-[#9c45e4]" onClick={onEdit}>
        <MdModeEdit />
      </IconButton>
      <IconButton className="text-red-400 hover:text-red-600" onClick={onDelete}>
        <MdOutlineDeleteOutline />
      </IconButton>
      <Checkbox isChecked={isChecked} onClick={onCheck} />
    </li>
  );
}

export default TaskItem;
