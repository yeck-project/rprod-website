import React from "react";
import { Link } from 'gatsby'

export default function ProductPageHeader() {
  const image = 'https://trek.scene7.com/is/image/TrekBicycleProducts/b300_mtbMarqueeImage?$responsive-pjpg$&cache=on,on&wid=1920';
  const logo = 'https://res.cloudinary.com/ridefolks/image/upload/v1642532967/Fichier_3_pxxic0.png'
  const titre = "Tout pour le vélo";
  return (
    <div style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} class="flex flex-col text-center items-center justify-center w-full h-full">
      <a href="/" class="">
        <img src={logo} class="w-4/5 m-auto transform transition duration-500 hover:scale-125"/>
      </a> 
      <h2 class="text-xl text-gray-100 mt-5 w-3/4">{titre}</h2> 
    </div> 
  )
}