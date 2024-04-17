import React from "react";

// TODO:add check box validation

export const LoginForm = () => {

  
  return (
    <div className="max-w-1/2">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to Dribbble</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Email" className="font-bold block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-base bg-inputBg-100 p-3  mb-6 w-full rounded-md"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-bold block mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required={true}
                className="input-base bg-inputBg-100 p-3  mb-6 w-full rounded-md "
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            
          </div>
          <button
            type="submit"
            className="group relative flex w-1/2 justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-dribblePink focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
