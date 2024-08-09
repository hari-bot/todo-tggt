import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
    <Routes>
      <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRouter;
