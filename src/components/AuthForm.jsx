import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const AuthForm = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, confirmPassword });
  };

  const openAuthForm = () => {
    setIsAuthOpen(true); // Open the auth form within the same tab
  };

  return (
    <div>
      {/* Button to open AuthForm */}
      <button
        onClick={openAuthForm}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400"
      >
        Signup/Login
      </button>

      {/* Conditionally render the AuthForm */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Login' : 'Signup'} Form
            </h2>
            <div className="flex justify-between mb-4">
              <button
                type="button"
                className={`px-4 py-2 rounded ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
              >
                {isLogin ? 'Login' : 'Signup'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                className="text-blue-500 hover:underline ml-1"
                onClick={toggleForm}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
