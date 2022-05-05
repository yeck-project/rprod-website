import React from "react";
import { Link } from 'gatsby'

export default function OneProduct({ image, titre, description, lien }) {
  
  return (
    <div class="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
    <img
      class="object-cover w-full h-96"
      src={image?.url}
      alt="Photo"
    />
    <h4 class="mt-4 text-xl font-bold text-gray-900">{titre}</h4>
    <p class="max-w-sm mt-2 text-gray-700">{description}</p>
    <div class="mt-4 flex flex-wrap">
      <a href={lien} class="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded">
        Découvrir les produits
      </a>
    </div>
  </div>
  )
}
