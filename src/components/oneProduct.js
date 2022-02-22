import React from "react";
import { Link } from 'gatsby'

export default function OneProduct() {
  const image = "https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg"
  return (
    
  <section>
  <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid">
        <div class="aspect-w-1 aspect-h-1">
          <img
            alt="Mobile Phone Stand"
            class="object-cover rounded"
            src="https://www.supertour.fr/wp-content/uploads/2021/09/Maillot-RedMounain-Face-1050x1050.jpg"
          />
        </div>
      </div>
      <div class="top-0">
        <div classe="mt-8">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
              Maillot Manche longue
            </h1>
          </div>
        </div>
        <div class="mt-4">
          <p class="prose max-w-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
          </p>
        </div>
        <div class="mt-4">
          <a href="#" class="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded">
            Prendre Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
