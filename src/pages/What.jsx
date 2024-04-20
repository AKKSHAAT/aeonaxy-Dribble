import React, { useState, useEffect } from "react";
import { Logo } from "../components/Logo";

import { useNavigate } from "react-router-dom";
import axios from 'axios';

// TODO:add imgsss
const What = () => {
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const handleChange = (value) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(value)) {
        return prevOptions.filter((option) => option !== value);
      } else {
        return [...prevOptions, value];
      }
    });
  };

  useEffect(() => {
    setIsReady(selectedOptions.length > 0);
    console.log(selectedOptions);
  }, [selectedOptions]);

  const takeNext = () => {
    try{
      const addWhat = axios.post("http://localhost:5656/user/what", {
        selectedOptions: selectedOptions,
        email: localStorage.getItem("email")
      });
        console.log(200);
        navigate("/Verify/"); 
      }
     catch(err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="m-14 mb-0 ">
        <Logo color={"#d94683"} />
    </div>
      <div className="flex flex-col items-center h-screen ">
        <h1 className="text-4xl font-bold mt-0 mb-4">
          What brings you to Dribbble?
        </h1>
        <p className="mb-24">
          {" "}
          Select the option that best describes you. Don't worry, you can
          explore other options later.
        </p>
        <div className="flex flex-wrap justify-center ">
          {/* -----------Tile 1-------------- */}
          <label
            className={`flex flex-col items-center mb-4 mx-6 px-8 text-black w-72 h-72 rounded-xl border-2 border-solid ${
              selectedOptions.includes("designer")
                ? "ring-2 ring-dribblePink"
                : ""
            }`}
          >
          <img
          className= {` object-cover  ${
              selectedOptions.includes("designer")
                ? "relative bottom-20"
                : ""
            }`}
          src={process.env.PUBLIC_URL + '/images/ShareWork.png'}
          alt="someting"
        />
            <p className="mt-2 mb-4 font-bold">
              I am a designer looking for work
            </p>
            <input
              type="checkbox"
              className="form-checkbox "
              value="designer"
              checked={selectedOptions.includes("designer")}
              onChange={() => handleChange("designer")}
            />
          </label>

          {/* -----------Tile 2-------------- */}
          <label
            className={`flex flex-col items-center mb-4 mx-6 px-8 text-black w-72 h-72 rounded-xl border-2 border-solid ${
              selectedOptions.includes("hire") ? "ring-2 ring-dribblePink" : ""
            }`}
          >
            <img
              className={` object-cover  ${
              selectedOptions.includes("hire")
                ? "relative bottom-20"
                : ""
            }`}
              src={process.env.PUBLIC_URL + '/images/hire.png'}
              alt="someting"
            />
            <p className="mt-2 mb-4 font-bold">
              I am looking to hire a designer
            </p>
            <input
              type="checkbox"
              className="form-checkbox "
              value="hire"
              checked={selectedOptions.includes("hire")}
              onChange={() => handleChange("hire")}
            />
          </label>

          {/* -----------Tile 3-------------- */}
          <label
            className={`flex flex-col items-center mb-4 mx-6 px-8 text-black w-72 h-72 rounded-xl border-2 border-solid ${
              selectedOptions.includes("inspiration")
                ? "ring-2 ring-dribblePink"
                : ""
            }`}
          >
            <img
              className={`  object-cover ${
              selectedOptions.includes("inspiration")
                ? "relative bottom-20"
                : ""
            }`}
              src={process.env.PUBLIC_URL + '/images/inspiration.png'}
              alt="someting"
            />
            <p className="mt-2 mb-4 font-bold">
              I am looking for design inspiration
            </p>
            <input
              type="checkbox"
              className="round form-checkbox ring-2 ring-transparent"
              value="inspiration"
              checked={selectedOptions.includes("inspiration")}
              onChange={() => handleChange("inspiration")}
            />
          </label>
        </div>

        <p className="mt-8">
          <span>
            {selectedOptions.length === 0
              ? ""
              : "Anything else? You can select multiple"}
          </span>
        </p>

        <button
        onClick={takeNext}
          className={`bg-dribblePink px-20 py-2 rounded-lg text-white font-bold ${
            !isReady && "opacity-50"
          }`}
          disabled={!isReady}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default What;
