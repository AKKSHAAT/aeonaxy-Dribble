import React, { useState } from 'react';

import { Logo } from "./Logo";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 
const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleSearch(e) {
    if (e.key === 'Enter') {
      const link = `https://dribbble.com/search/${search}`
      window.location.href = link;
    }
  }

  return (
    <div>
      <nav className="border-b-2 border-slate-100 p-4 flex  ">

        <div className="flex items-center ">
          <button className="md:hidden mr-4" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-7v2H3V6h18z"
              />
            </svg>
          </button>
          <Logo />
        </div>

        <div className='flex md:justify-between w-full justify-end'>


      <div className="md:flex hidden justify-between mx-4 items-center">
        <section
          id="navbar-default"
          className="md:flex flex-col md:flex-row justify-between items-center"
        >
          <p className="mx-3 font-medium text-slate-400 text-sm">Insperation</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Find Work</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Learn Design</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Go Pro</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Hire Designers</p>
        </section>
      </div>


        {/* ---------------------right section----------------- */}
      <section className="flex justify-between mx-4 items-center ">

          <div  className="input-base mx-3 flex items-center text-gray-400 bg-inputBg-100 px-3 py-1 rounded-md ">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
              <input
                id="search"
                name="seaerch"
                type="text"
                onChange={(e)=>setSearch(e.target.value)}
                autoComplete="search"
                onKeyPress={handleSearch}
                required
                className="input-base mx-3 bg-inputBg-100 p-1 "
                placeholder="search"
              />
          </div>

          <button className="text-slate-400 text-xl mx-3">
          <FontAwesomeIcon icon={faBriefcase} />
          </button>

          <img
          alt='something'
            src={localStorage.getItem("imgUrl")}
            className="w-full h-full mx-3 h-9 object-cover rounded-full"
          />

          <button
            className={`bg-dribblePink mx-3 px-4 py-2 rounded-lg text-white text-sm `}
          >
            Upload
          </button>
        </section>
        </div>
      </nav>


    {/* -----------for hamburger menu--------------- */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <section className="flex flex-col mx-4 items-start gap-4">
          <p className="mx-3 font-medium text-slate-400 text-sm ">Insperation</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Find Work</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Learn Design</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Go Pro</p>
          <p className="mx-3 font-medium text-slate-400 text-sm">Hire Designers</p>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
