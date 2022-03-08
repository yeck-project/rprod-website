import React from "react";
import { Link } from 'gatsby'

export default function ProductPageHeader() {
  const image = 'https://trek.scene7.com/is/image/TrekBicycleProducts/b300_mtbMarqueeImage?$responsive-pjpg$&cache=on,on&wid=1920';
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png'
  const titre = "Tout pour le vélo";
  return (
    <>
    <a href="/bike" class="hover:scale-125 relative flex items-center justify-center overflow-hidden shadow-xl w-full h-full">
      <div style={{backgroundImage: `url(${image})`}} class="hover:scale-125 absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover"/>
      <img src={logo} class="absolute w-4/6 transition-all duration-500 ease-in-out transform opacity-80 hover:scale-100"/>
    </a>
    </> 
  )
}