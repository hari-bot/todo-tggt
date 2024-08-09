import React, { useState } from 'react';
import { IoCalendarClear } from 'react-icons/io5';
import Indicator from '../../base/Indicator';
import { IoAddCircleOutline } from 'react-icons/io5';
import IconButton from '../../base/IconButton';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../state/tasks/taskSlice';

function AddTask() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && date) {
      dispatch(addTask({ title, date }));
      setTitle('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white mt-20 rounded-2xl px-2 py-3">
      <div className="flex space-x-2 mr-2">
        <Indicator type="expired" />
        <Indicator type="upcoming" />
        <Indicator type="today" />
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow outline-none"
        placeholder="What is your next task?"
        required
      />
      <div className="relative">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none text-sm font-semibold px-4 py-1 rounded-md bg-white"
          required
        />
        <IoCalendarClear className="text-[#CA8BFE] text-xl absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
      <IconButton type="submit">
        <IoAddCircleOutline className="text-[#CA8BFE] text-2xl ml-2" />
      </IconButton>
    </form>
  );
}

export default AddTask;
