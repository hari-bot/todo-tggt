import React from 'react';
import { BsCalendar4 } from 'react-icons/bs';
import Indicator from '../../base/Indicator';
import { IoAddCircleOutline } from 'react-icons/io5';

interface AddTaskProps {
  onClick?: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClick }) => {
  return (
    <div className="flex items-center bg-white mt-20 rounded-2xl px-2 py-3">
      <div className="flex space-x-2 mr-2">
        <Indicator type="expired" />
        <Indicator type="upcoming" />
        <Indicator type="today" />
      </div>
      <input className="flex-grow outline-none" placeholder="What is your next task?" onClick={onClick} />
      <BsCalendar4 className="text-[#CA8BFE] text-xl ml-2" />
      <IoAddCircleOutline className="text-[#CA8BFE] text-2xl ml-2" />
    </div>
  );
};

export default AddTask;
