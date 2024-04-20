import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";


export const LoginForm = () => {
  const [wrongCreds, setWrongCreds] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  function handleLogin() {
    const login = axios.post("http://localhost:3636/user/login", {
      email: email,
      password: password,
    });

    if (login.status === 403) {
      setWrongCreds(true);
    }
  }

  return (
    <div className="max-w-1/2">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
        <h1
          className={` ${
            wrongCreds ? "block" : "hidden"
          } bg-red-400 text-center text-xl text-white rounded-xl p-2`}
        >
          <FontAwesomeIcon icon={faWarning} />
          email already exists
        </h1>
        </div>

        <div className="mt-8 space-y-6 w-96 " action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="Email" className="font-bold block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
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
                onChange={handleChange}
                type="password"
                autoComplete="current-password"
                value={password}
                required={true}
                className="input-base bg-inputBg-100 p-3  mb-6 w-full rounded-md "
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            onClick={handleLogin}
            type="submit"
            className="group relative flex w-1/2 justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-dribblePink focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
