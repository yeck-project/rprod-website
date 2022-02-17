import React from "react";
import { Link } from 'gatsby'

export default function BikeHeader() {
  return (
  <section class="relative py-20 bg-black">
    <div class="relative container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
          <div class="lg:py-20">
            <h2 class="mt-14 mb-8 md:mb-14 text-6xl md:text-7xl text-white font-bold font-heading">Features styles. Check it now.</h2>
            <p class="mb-8 md:mb-24 text-white">Discover more products and inspiration.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
          <img class="h-full object-cover" src="https://media.istockphoto.com/photos/mountain-biking-on-trail-picture-id1182762582?k=20&m=1182762582&s=612x612&w=0&h=Gk-G1wdD9A71iac-8a8jiTMgjestzDdIhBH_7Tj6W2A=" alt=""/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <img class="h-full object-cover" src="http://twowheeledwanderer.com/wp-content/uploads/2021/09/Valiholl-600x600.jpg" alt=""/>
        </div>
      </div>
    </div>
  </section>
  )
}
