import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <header className="bg-[#011638] py-4">
      <div className="mx-12 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Class Connect" className="md:ml-0 h-20" />
        </Link>
        <div className="items-center flex flex-row gap-10">
          <Link to="/">
            <button className="bg-[#00008B] hover:bg-[#EEC643] hover:text-[#00008B] border border-white text-white rounded-3xl text-base sm:text-xl px-6 sm:px-14 py-2 sm:py-4">
              Back
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header2;
