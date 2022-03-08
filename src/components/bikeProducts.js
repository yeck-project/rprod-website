import React from "react";

export function BikeProduct({image, title, link}) {
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

export default function BikeProducts() {
  const image = "https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg";
  const image2 = "https://cd.bike-discount.de/media/image/df/ac/06/bekleidung_herren_helme_mtb_helme.jpg";
  return (
  <section class="py-20 bg-gray-100 overflow-x-hidden">
    <div class="container mx-auto px-4">
      <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">The Latest And The Greatest</h2>
      <div class="flex flex-wrap -mx-3 mb-20">
        <BikeProduct 
        image={image}
        title={"Test"}
        link={"/bike"}
        />
        <BikeProduct 
        image={image2}
        title={"Test"}
        link={"/bike"}
        />
        <BikeProduct 
        image={image2}
        title={"Test"}
        link={"/bike"}
        />
        <BikeProduct 
        image={image2}
        title={"Test"}
        link={"/bike"}
        />
      </div>
    </div>
  </section>
  )
}
