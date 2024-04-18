import React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { faSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <nav className="border-b-2 border-slate-100 p-4 flex ">
      <Logo />
      <div className="flex justify-between w-full ">
        <section className="flex justify-between mx-4 items-center">
          <p className="mx-3 font-bold text-slate-400 text-sm">Insperation </p>
          <p className="mx-3 font-bold text-slate-400 text-sm">Find Wrok </p>
          <p className="mx-3 font-bold text-slate-400 text-sm">Learn Design</p>
          <p className="mx-3 font-bold text-slate-400 text-sm">Go Pro</p>
          <p className="mx-3 font-bold text-slate-400 text-sm">
            Hier Designers
          </p>
        </section>

        <section className="flex justify-between mx-4 items-center ">
          <input
            id="search"
            name="seaerch"
            type="text"
            autoComplete="search"
            required
            className="input-base mx-3  bg-inputBg-100 p-1 rounded-md "
            placeholder="search"
          />

          <button className="text-slate-400 text-xl mx-3">
            <FontAwesomeIcon icon={faSubway} />
          </button>

          <img
            src=""
            className="w-full h-full mx-3  object-cover rounded-full"
          />

          <button
            className={`bg-dribblePink mx-3 px-4 py-2 rounded-lg text-white text-sm `}
          >
            Upload
          </button>
        </section>
      </div>
    </nav>
  );
};
