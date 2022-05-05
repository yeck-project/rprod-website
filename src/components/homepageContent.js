import React from "react";

export default function homePageContent({logo, link, image}) {
  return (
    <>
    <a href={link} class="relative flex items-center justify-center overflow-hidden shadow-xl w-full h-full">
      <div style={{backgroundImage: `url(${image})`}} class="absolute w-full h-full transform bg-center bg-cover"/>
      <img src={logo} class="absolute w-4/6 transition-all duration-500 ease-in-out transform opacity-80 hover:scale-125"/>
    </a>
    </> 
  )
}