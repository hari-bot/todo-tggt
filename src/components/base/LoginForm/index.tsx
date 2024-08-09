import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../state/user/userSlice';

function LoginForm() {
  const [pageType, setPageType] = useState('signin');
  const [username, setUsername] = useState('');
  const isSignin = pageType === 'signin';
  const isRegister = pageType === 'register';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signin button clicked');

    dispatch(login(username));
    navigate('/home');
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        {isSignin ? 'Sign In' : 'Register'} to your account
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
            />
          </div>
        )}
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
            User Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username} // Bind the username state
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[#a18aff] hover:bg-[#8a6ff7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isSignin ? 'Sign In' : 'Register'}
        </button>
        <p className="text-sm font-light text-gray-500 hover:cursor-pointer">
          {isSignin ? "Don't have an account?" : 'Already have an account? '}{' '}
          <button
            className="font-medium text-primary-600 hover:underline focus:outline-none"
            type="button"
            onClick={() => setPageType(isSignin ? 'register' : 'signin')}
          >
            {isSignin ? 'Register here.' : 'Sign In here.'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
