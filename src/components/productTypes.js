import React from "react";

export function Product({image, title, link}) {
  return (
    <div class="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
      <div class="relative mb-6 h-64 w-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${image})`}}>
        <a class="flex w-full h-full justify-center items-center bg-black opacity-50 hover:opacity-75 transition duration-200 ease-in-out" href={link}>
          <h3 class="text-3xl font-bold font-heading text-white">{title}</h3>
        </a>
      </div>
    </div>    
  )
};

export default function Products({ products, titre }) {
  return (
  <section class="py-20 bg-white overflow-x-hidden">
    <div class="container mx-auto px-4">
      <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">{titre}</h2>
      <div class="flex flex-wrap -mx-3 mb-20">
      {products?.map((value, key)=>{
        return (
          <Product
          key={key}
          image={value?.image.url}
          title={value?.titre}
          link={""}
          />
        )
      })}
      </div>
    </div>
  </section>
  )
}
