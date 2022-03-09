import React from "react";

export default function homePageContent({logo, image, link}) {
  return (
    <>
    <a href={link} class="hover:scale-125 relative flex items-center justify-center overflow-hidden shadow-xl w-full h-full">
      <div style={{backgroundImage: `url(${image})`}} class="hover:scale-125 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"/>
      <img src={logo} class="absolute w-4/6 transition-all duration-500 ease-in-out transform opacity-80 hover:scale-100"/>
    </a>
    </> 
  )
}