import React from "react";

const LoginForm = () => {
  
  return (
      <form className="bg-candy-apple border-black border shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-50 hover:opacity-100">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <button
            className="bg-f1-black2 hover:bg-f1-dark-gray text-white font-bold py-2 px-4 rounded shadow-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Register
          </button>
        </div>
      </form>
  );
};

export default LoginForm;
