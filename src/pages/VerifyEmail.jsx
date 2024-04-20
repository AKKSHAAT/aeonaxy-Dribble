import React, { useEffect } from "react";
import NavBar  from "../components/NavBar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import axios from "axios";




export const VerifyEmail = ({ emailAdress }) => {


  function handleMail() {
    const token = localStorage.getItem("email");
    axios.get("https://aeonaxy-dribble.onrender.com/user/mail", {
      token: token
    }).then(res=>{
      if(res.status === 400) {
        console.log("err");
      } else {
        console.log("sent");
      }
    })
  }

  useEffect(()=>{
    handleMail();
  }, []);
  return (
    <div>
      
      <NavBar />
      <section className="pt-12 px-4 text-center">
        <h1 className="text-4xl font-medium text-black ">
          {" "}
          Please verify your email...{" "}
        </h1>

        <div className=" text-9xl text-zinc-400 mb-4">
          <div className="relative left-36 bottom-20 inline-flex p-1 text-xl text-white bg-pink-400 rounded-full border-4 border-white border-solid">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <p className="text-zinc-400 mb-2">
          Please Verify your email address. We've sent a confirmation email to:
        </p>
        <p className="font-bold mb-2">
          {localStorage.getItem("email")}
        </p>
        <p className="text-zinc-400 mb-2 ">
          Click the confirmation link in that email to begin using Dribble
        </p>
        <p className="text-zinc-400 mb-2 ">
          Didn't recive the email? Check your Spam folder. It may have been
          caught by a filter. if you still don't see it you can
          <span className=" text-dribblePink font-semibold"> resend the confirmation email</span>
        </p>
        <p className="text-zinc-400 mb-2 ">
          Wrong email address?  
          <span className=" text-dribblePink font-semibold"> Change it</span>
        </p>
      </section>

      <Footer />
    </div>
  );
};
