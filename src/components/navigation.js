import React, { useState } from "react";

export function NavbarMobile () {
  const [open, SetOpen] = useState(true);
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  
  function toggle() {
    SetOpen(!open);
  }
  
  return (
    <>
    <div class="relative">
      <div class="bg-white text-black flex justify-between">
        <a href="#" class="block p-4"><img src={logo} class="h-10 w-auto"/></a>
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
      'bg-white min-h-screen z-10 w-4/6 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform translate-x-full transition duration-500 ease-in-out origin-right' : 
      'bg-white min-h-screen z-10 w-4/6 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform md:relative transition duration-500 ease-in-out origin-right'}
      >
        <nav>
          <button onClick={toggle} type="button"
            className={open ? 
              'hamburger hamburger--collapse outline-none absolute right-3 top-3' : 
              'hamburger hamburger--collapse outline-none is-active absolute right-3 top-3'}
              >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span> 
          </button>
          <div class="mt-20 text-black">
            <a href="#" class="text-center text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">Home</a>
            <a href="#" class="text-center text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">Home</a>
            <a href="#" class="text-center text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">Home</a>
            <a href="#" class="text-center text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">Home</a>
          </div>
          <div class="flex justify-center mt-10">
            <a class="mr-3" href="#">
              <img class="w-10 h-auto" src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Free-Image.png" alt=""/>
            </a>
            <a href="#">
              <img class="w-10 h-auto" src="https://i.pinimg.com/originals/d2/e5/35/d2e5359f8402cb8d3d7b22c463f9013b.png" alt=""/>
            </a>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export function NavbarDesktop () { 
  
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  
  return (
    <>
      <nav class="relative px-6 py-2 flex justify-between items-center bg-white">
        <a href="#" class="block p-4"><img src={logo} class="h-10 w-auto"/></a>
        <ul class="flex mx-auto flex items-center w-auto space-x-6">
          <li><a href="#" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Home</a></li>
          <li><a href="#" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Home</a></li>
          <li><a href="#" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Home</a></li>
          <li><a href="#" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Home</a></li>
          <li><a href="#" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Home</a></li>
        </ul>
        <a class="text-white bg-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-white hover:border-black hover:text-black" href="#">Contact</a>
      </nav>
    </>
  );
};

export default function Navbar () { 
  
  return (
    <>
    <div class="md:hidden">
      <NavbarMobile/>
    </div>
    <div class="hidden md:block">
      <NavbarDesktop/>
    </div>
    </>
  );
};
