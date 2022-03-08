import React from "react";
import { Link } from 'gatsby'

export default function OneProduct() {
  const image = "https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg"
  return (
    <div class="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
    <img
      class="object-cover w-full h-96"
      src="https://www.supertour.fr/wp-content/uploads/2021/09/Maillot-RedMounain-Face-1050x1050.jpg"
      alt=""
    />
  
    <h5 class="mt-4 text-xl font-bold text-gray-900">Maillot manche longue</h5>
  
    <p class="max-w-sm mt-2 text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
      sequi ipsam incidunt.
    </p>
    <div class="mt-4 flex flex-wrap">
      <a href="#" class="mr-4 bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded">
        Prendre Contact
      </a>
      <a href="#" class="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded">
        Prendre Contact
      </a>
    </div>
  </div>
  )
}
