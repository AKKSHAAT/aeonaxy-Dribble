import React from "react";
import NavBar  from "../components/NavBar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export const VerifiedEmail = ({ emailAdress }) => {

  return (
    <div>
      
      <NavBar />
      <section className="pt-12 px-4 text-center">
        <h1 className="text-4xl font-medium text-black ">
          {" "}
          You have been verified!!!! 🥳{" "}
        </h1>

        <div className=" text-9xl text-pink-400 mb-4">
          <div className="relative left-36 bottom-20 inline-flex p-1 text-xl text-white bg-pink-400 rounded-full border-4 border-white border-solid">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <p className="text-zinc-400 mb-2">
          
        </p>
        <p className="font-bold mb-2">
          {localStorage.getItem("email")}
        </p>
      </section>

      <Footer />
    </div>
  );
};
