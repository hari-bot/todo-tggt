import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../components/shared/SideBar';
import AddTask from '../../components/custom/AddTask';
import TaskList from '../../components/custom/TakList';
import { RootState } from '../../state/store';

function HomePage() {
  const userName = useSelector((state: RootState) => state.user.userName);

  return (
    <div className="flex h-screen">
      <SideBar name={userName} />
      <div className="w-[80%] bg-[#a18aff] py-10 px-20 flex flex-col">
        <h1 className="text-gray-100 text-3xl font-bold">Today Main Focus</h1>
        <h1 className="text-white text-4xl font-bold">Design Team Meeting</h1>
        <AddTask onClick={() => {}} />
        <TaskList />
      </div>
    </div>
  );
}

export default HomePage;
