import React, { useState } from "react";
import { Link } from 'gatsby'


export default function Navbar () {
  const [open, SetOpen] = useState(false);
  const sidebar = document.querySelector(".sidebar");
  const menu = document.getElementById("mobile-menu");
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  
  function toggle() {
    SetOpen(!open);
  }
  
  return (
    <>
    <div class="relative">
      <div class="bg-white text-black flex justify-between">
        <a href="#" class="block p-4"><img src={logo} class="h-16 w-auto"/></a>
        <button onClick={toggle} type="button"
          className={open ? 
            'hamburger hamburger--collapse outline-none' : 
            'hamburger hamburger--collapse outline-none is-active'}
            >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span> 
        </button>
      </div>
      <div className={open ? 
      'bg-white min-h-screen z-10 w-full space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-y-full md:relative transition duration-500 ease-in-out' : 
      'bg-white min-h-screen z-10 w-full space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative transition duration-500 ease-in-out'}
      >
        <nav>
          <button onClick={toggle} type="button"
            className={open ? 
              'hamburger hamburger--collapse outline-none absolute right-2 top-2' : 
              'hamburger hamburger--collapse outline-none is-active absolute right-2 top-2'}
              >
            <span class="hamburger-box rounded-full hover:bg-blue">
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
