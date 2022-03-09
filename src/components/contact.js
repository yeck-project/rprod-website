import React from "react";

export default function Contact() {
  
  return (
    <section id="contact">
    <div class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold font-heading">Prenez Contact</h2>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
            <div class="py-12 lg:py-20 rounded bg-white shadow text-center">
              <h3 class="mb-8 lg:mb-20 text-3xl font-bold font-heading">Office</h3>
              <p class="text-gray-400">359 Hidden</p>
              <p class="text-gray-400">Valley Road, NY</p>
            </div>
          </div>
          <div class="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
            <div class="py-12 lg:py-20 rounded bg-white shadow text-center">
              <h3 class="mb-8 lg:mb-20 text-3xl font-bold font-heading">Contacts</h3>
              <p class="text-gray-400">hello@gmail.com</p>
              <p class="text-gray-400">+48 698 033 101</p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 flex items-stretch">
            <div class="py-12 lg:py-20 w-full rounded bg-white shadow text-center">
              <h3 class="mb-8 lg:mb-20 text-3xl font-bold font-heading">Socials</h3>
              <div class="flex justify-center">
                <a class="mr-3" href="#">
                  <img class="w-8 h-8" src="atis-assets/social/facebook.svg" alt=""/>
                </a>
                <a class="mr-3" href="#">
                  <img class="w-8 h-8" src="atis-assets/social/twitter.svg" alt=""/>
                </a>
                <a href="#">
                  <img class="w-8 h-8" src="atis-assets/social/instagram.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skew skew-bottom mr-for-radius">
      <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
      </svg>
    </div>
    <div class="skew skew-bottom ml-for-radius">
      <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
      </svg>
    </div>
  </section>
  )
}
