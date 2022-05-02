import React from "react";

export function Photo({ image }) {
  return (
    <div class="w-full h-auto md:w-1/2 lg:w-1/3 px-4 mb-12">
      <div class="max-w-max mx-auto">
        <img class="w-full h-full" src={image} alt=""/>
      </div>
    </div>
  )
};

export default function Photos({photos}) {
  return (
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center justify-between -mx-4 mb-16">
      <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <div class="max-w-md">
          <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Immobilier</span>
          <h3 class="mb-4 text-4xl md:text-5xl font-bold tracking-tighter">Galerie</h3>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-4">
      {photos?.map((value, key)=>{
        return (
          <Photo
          key={key}
          image={value?.image.url}
          />
        )
      })}
    </div>
  </div>
  </section>
  )
}
