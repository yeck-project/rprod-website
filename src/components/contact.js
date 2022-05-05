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
              <h3 class="mb-8 lg:mb-20 text-3xl font-bold font-heading">Contacts</h3>
              <p class="text-gray-400">remi.cordier@msn.com</p>
              <p class="text-gray-400">+33 58 265 813</p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 flex items-stretch">
            <div class="py-12 lg:py-20 w-full rounded bg-white shadow text-center">
              <h3 class="mb-8 lg:mb-20 text-3xl font-bold font-heading">Réseaux Sociaux</h3>
              <div class="flex justify-center">
                <a class="mr-3" href="https://www.facebook.com/R-Prod-Outdoor-Vid%C3%A9o-photo-919985554817049">
                  <img class="w-8 h-8" src="https://res.cloudinary.com/dnspsw5d4/image/upload/v1651780685/logo/Facebook_f_logo__2019_.svg_gcg17z.png" alt=""/>
                </a>
                <a href="https://www.instagram.com/rprodoutdoor/">
                  <img class="w-8 h-8" src="https://res.cloudinary.com/dnspsw5d4/image/upload/v1651780693/logo/t%C3%A9l%C3%A9chargement_awzuhf.jpg" alt=""/>
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
