import React from "react";

export function Brand({ image }) {
  return (
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
    <div class="py-12 px-2 rounded-md shadow-2xl">
      <img class="mx-auto h-20" src={image} alt=""/>
    </div>
  </div>
  )
};

export default function Brands({ brands, titre }) {
  return (
  <section class="py-20 bg-gray-50 ">
    <div class="container mx-auto px-4">
      <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">{titre}</h2>
      <div class="flex flex-wrap -mx-4">
      {brands?.map((value, key)=>{
        return (
          <Brand
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
