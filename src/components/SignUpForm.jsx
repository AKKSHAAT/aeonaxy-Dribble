import React, {useReducer} from "react";

// TODO:add check box validation
// TODO:add username check w debouncing

const initialState = {
  name: '',
  email: '',
  username: '',
  password: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const SignUpForm = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    console.log(state.name)
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  
  return (
    <div className="max-w-1/2">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to Dribbble</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="flex">
              <div className="mr-4">
                <label htmlFor="name" className="font-bold block mb-1 ">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input-base bg-inputBg-100 p-3 rounded-md mb-6"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="username" className="font-bold block mb-1">
                  Username
                </label>
                <input
                  onChange={handleChange}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="input-base bg-inputBg-100 p-3  rounded-md  mb-6  "
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="font-bold block mb-1">
                Email
              </label>
              <input
                onChange={handleChange}
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
                onChange={handleChange}
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
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Creating an account means you're okay with our {" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Terms of Service,
                </a>{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
                and{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  our default Notification Settings 
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="group relative flex w-1/2 justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-dribblePink focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
