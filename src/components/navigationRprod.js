import React, { useState } from "react";
export function NavbarMobile () {
  const menuItems = ['immobilier', 'produit', 'sport', 'wedding'];
  const logo = "https://res.cloudinary.com/dnspsw5d4/image/upload/v1649503516/r%20prod/Fichier_2_dtreqd.png"
  const [open, SetOpen] = useState(true);
  
  function toggle() {
    SetOpen(!open);
  };

  return (
    <>
    <div class="relative">
      <div class="bg-white text-black flex justify-between">
        <a href="/rprod" class="block p-4"><img src={logo} class="h-10 w-auto"/></a>
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
      'bg-white min-h-screen z-10 w-4/6 space-y-6 py-7 px-2 absolute inset-y-0 right-0 transform transition duration-500 ease-in-out origin-right'}
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
          <div class="mt-20 text-black text-center">
            {menuItems.map((menuItem)=>{
            return (
              <a href={`/rprod/${menuItem.toLowerCase()}`} class="text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">{menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}</a>
            )
            })}
            <a href="/rbike" class="text-black text-xl block py-2.5 px-4 mb-5 rounded transition duration-200 hover:bg-black hover:text-white">Site Rbike</a>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
};

export function NavbarDesktop () { 
  const menuItems = ['immobilier', 'produit', 'sport', 'wedding'];
  const logo = "https://res.cloudinary.com/dnspsw5d4/image/upload/v1649503516/r%20prod/Fichier_2_dtreqd.png"

  const handleClickContact = () => {
    var elementContact = document.getElementById("contact");
    elementContact.scrollIntoView({ behavior: 'smooth', block: 'start'});
  };

  return (
    <>
      <nav class="relative px-6 py-2 flex justify-between items-center bg-white">
        <a href="/rprod" class="block p-4"><img src={logo} class="h-10 w-auto"/></a>
        <ul class="flex mx-auto flex items-center w-auto space-x-6">
        {menuItems.map((menuItem)=>{
          return (
            <li><a href={`/rprod/${menuItem.toLowerCase()}`} class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">{menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}</a></li>
          )
          })}
            <li><a href="/rbike" class="text-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-black hover:text-white">Site Rbike</a></li>
        </ul>
        <a onClick={handleClickContact} class="text-white bg-black text-md py-2.5 px-4 rounded transition duration-200 hover:bg-white hover:border-black hover:text-black">Contact</a>
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
