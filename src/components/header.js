import React from "react";
import { Link } from 'gatsby'

export default function Header({ headerTitle, imageHeader1, imageHeader2 }) {
  return (
  <section class="relative py-0 md:py-20 bg-black">
    <div class="relative container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
          <div class="lg:py-20">
            <h2 class="mt-14 mb-8 md:mb-14 text-6xl md:text-7xl text-white font-bold font-heading">{headerTitle}</h2>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
          <img class="h-full object-cover" src={imageHeader1} alt=""/>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <img class="h-full object-cover" src={imageHeader2} alt=""/>
        </div>
      </div>
    </div>
  </section>
  )
}
