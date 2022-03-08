import React, { useState } from "react";
import { Link } from 'gatsby'


export default function Navbar () {
  const [open, SetOpen] = useState(false);
  const sidebar = document.querySelector(".sidebar");
  const menu = document.getElementById("mobile-menu");
  
  function toggle() {
    sidebar.classList.toggle("-translate-y-full");
    menu.classList.toggle("is-active");

  }
  
  return (
    <>
    <div class="relative md:flex">
      <div class="bg-white text-black flex justify-between md:hidden">
        <a href="#" class="block p-4 text-black font-bold">Better Dev</a>
        <button onClick={toggle} id="mobile-menu2" class="hamburger hamburger--collapse outline-none" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span> 
        </button>
      </div>
      <div class="sidebar bg-white min-h-screen z-10 text-blue-100 w-full space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-y-full md:relative md:translate-x-0 transition duration-500 ease-in-out md:hidden">
        <nav>
          <button onClick={toggle} id="mobile-menu" class="hamburger hamburger--collapse absolute top-5 right-5 rounded hover:bg-blue" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span> 
          </button>
          <div class="mt-20 text-black text-xl">
          <a href="#" class="block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white text-center">Home</a>
          <a href="#" class="block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white text-center">Home</a>
          <a href="#" class="block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white text-center">Home</a>
          <a href="#" class="block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white text-center">Home</a>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};
