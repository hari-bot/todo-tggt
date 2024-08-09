import './index.css';
import AddTask from './components/custom/AddTask';
import SideBar from './components/shared/SideBar';
import TaskList from './components/custom/TakList';
import HomePage from './pages/HomePage';
import AppRouter from './routes/AppRouter';

function App() {
  return <AppRouter />;
}

export default App;
