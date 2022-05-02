import React from "react";
import { Link } from 'gatsby'

export default function ProductPageHeader() {
  return (
  <section class="relative pt-20 md:pt-32 pb-20 bg-white overflow-x-hidden">
    <img class="absolute top-0 left-0 w-full max-h-32" src="yofte-assets/elements/line-content.svg" alt="" data-removed="true"/>
    <div class="container mx-auto px-4">
      <div class="relative h-96 -mx-6 mb-20">
        <img class="relative w-full h-96 px-6 object-cover" src="https://media.met-helmets.com/app/uploads/2021/11/met-mtb-helmets-range-2022-1.jpg" alt=""/>
      </div>
      <div class="max-w-3xl mx-auto">
        <h3 class="mb-12 text-3xl text-black">This morning, platea dictumst nec nunc. In hac habitasse, general, dignissim accumsan just. Suspendisse vitae ligula convallis, porta tortor et, finibus neque.</h3>
        <p class="mb-10 text-xl text-gray-400" data-removed="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat nisl quis justo egestas, nec eleifend erat egestas. Curabitur purus neque, tincidunt ac malesuada nec, ornare non odio. Nulla nec lorem sed purus semper porta vel sit amet sem. Nunc placerat non turpis eu molestie. Nam consectetur lacus ut lacus elementum dapibus. Etiam vehicula ipsum ac dolor tristique placerat. In hac habitasse platea dictumst.</p>
      </div>
    </div>
  </section>
  )
}
