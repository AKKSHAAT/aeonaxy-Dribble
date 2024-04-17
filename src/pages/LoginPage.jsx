import React,{useState} from 'react';
import { SignUpForm } from '../components/SignUpForm';
import {LoginForm} from '../components/LoginForm'
import { Logo } from '../components/Logo';


const LoginPage = ({login}) => {
  
  const [showLogin, setShowLogin] = useState(login || false);
  
  
  function handleLogin() {
    console.log(showLogin);
    setShowLogin(!showLogin);
  }


  return (
    <div className="min-h-screen flex items-center justify-start relative">
      {/* text on image */}
      <div className='hidden md:block absolute top-14 left-14 transform text-center w-1/4 '>
        <Logo color={'#ae8942'}/>
        <h1 className="mt-4 text-left text-2xl font-bold text-ugly-text-brown">Discover the world's top Designers and Creatives</h1>
      </div>

      <div className='hidden md:block absolute bottom-14 left-14 transform w-1/4 '>
        <a href='https://dribbble.com/tarka' className="text-left text-ugly-text-brown underline"> Art by Peter Tarka</a>
      </div>

      {/* image */}
      <div className="w-1/3 h-screen flex items-center justify-start hidden md:block">
        <img
          className='w-full h-full object-cover'
          src={process.env.PUBLIC_URL + '/images/login_photo.png'}
          alt="Login Photo"
        />
      </div>

      <p className='absolute top-10 right-20'>{showLogin ? "Not a Member? " : "Alredy a Member? "}
      <span onClick={handleLogin} className='text-blue-700 cursor-pointer'> {showLogin ? "Sign Up" : "Sign In"}</span>
      </p>
      
      <div className='mx-auto  px-6 md:p-0'>
      {showLogin ? (
        <LoginForm /> ) : (
          
          <SignUpForm /> 
        )

      }
      </div>
    </div>
  );
};

export default LoginPage;
