import './index.css';
import AddTask from './components/custom/AddTask';
import SideBar from './components/shared/SideBar';
import TaskList from './components/custom/TakList';

function App() {
  return (
    <div className="flex h-screen">
      <SideBar name="Hari Haran" />
      <div className="w-[80%] bg-[#a18aff] py-10 px-20 flex flex-col">
        <h1 className="text-gray-100 text-3xl font-bold">Today Main Focus</h1>
        <h1 className="text-white text-4xl font-bold">Design Team Meeting</h1>
        <AddTask onClick={() => {}} />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
