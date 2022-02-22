import React from "react";
import { Link } from 'gatsby'

export default function BikeProducts() {
  const image = "https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg";
  const image2 = "https://cd.bike-discount.de/media/image/df/ac/06/bekleidung_herren_helme_mtb_helme.jpg";
  return (
<section class="py-20 bg-gray-100 overflow-x-hidden">
  <div class="container mx-auto px-4">
    <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">The Latest And The Greatest</h2>
    <div class="flex flex-wrap -mx-3 mb-20">
      <div class="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
        <div class="shadow hover:shadow-xl relative mb-6 h-64 w-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${image2})`}}>
          <a class="flex w-full h-full justify-center items-center" href="/productPage">
            <h3 class="text-3xl font-bold font-heading text-white">Casques</h3>
          </a>
        </div>
        <div class="relative h-64 w-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${image})`}}>
          <a class="absolute inset-0 flex items-end" href="#">
            <div class="pl-12 pb-12">
              <h3 class="text-3xl font-bold font-heading text-white">.</h3>
            </div>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 px-3">
        <div class="relative inline-block mb-6 h-96 lg:h-full w-full bg-no-repeat bg-cover" style={{backgroundImage: `url(${image})`}}>
          <div class="absolute bottom-0 left-0 pb-20 pl-12">
            <span class="text-xl text-orange-300 font-bold font-heading"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
