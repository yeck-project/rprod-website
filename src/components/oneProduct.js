import React from "react";
import { Link } from 'gatsby'

export default function OneProduct() {
  return (
    <section class="py-20 bg-gray-100 overflow-x-hidden">
    <div class="container mx-auto px-4">
      <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">Latest Blog</h2>
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap -m-10">
          <div class="w-full lg:w-2/3 p-10">
            <div class="relative pt-16 px-6 lg:px-24 bg-black pb-20 min-h-full">
            </div>
          </div>
          <div class="w-full lg:w-1/3 p-10">
            <div class="relative px-10 py-12 bg-gray-600 h-full">
              <div class="absolute top-0 -mt-6 right-0 mr-10 lg:left-0 lg:-ml-5 lg:mt-10 w-14 h-14 bg-gray-600" data-removed="true"></div>
              <h4 class="mb-10 text-3xl font-bold text-white">Benefits</h4>
              <ul><li class="flex mb-3 items-center">
                <span class="flex mr-4 justify-center items-center w-10 h-10 bg-gray-900 rounded-full">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z" fill="white"></path></svg></span>
                <p class="text-lg font-bold text-white">Discounts</p>
                </li>
                <li class="flex mb-3 items-center">
                  <span class="flex mr-4 justify-center items-center w-10 h-10 bg-gray-900 rounded-full">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z" fill="white"></path></svg></span>
                  <p class="text-lg font-bold text-white">Offers</p>
                </li>
                <li class="flex items-center">
                  <span class="flex mr-4 justify-center items-center w-10 h-10 bg-gray-900 rounded-full">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.13504 13.3377L0 7.20264L0.810243 6.3924L6.13504 11.7172L17.1898 0.662476L18 1.47272L6.13504 13.3377Z" fill="white"></path></svg></span>
                  <p class="text-lg font-bold text-white">News/Articles</p>
                </li>
              </ul></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
