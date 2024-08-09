import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/base/LoginForm';
import { RootState } from '../../state/store';

function LoginPage() {
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.user.userName);

  useEffect(() => {
    if (userName) {
      navigate('/home');
    }
  }, [userName, navigate]);

  return (
    <section className="bg-[#a18aff]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-4xl font-bold text-white hover:cursor-pointer">toDo</div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
