import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import OneProduct from "../../components/oneProduct";
import Contact from "../../components/contact";
import Navigation from "../../components/navigationRbike";

export default function Textiles({ data: { allTextiles } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Produits Textiles';
  const image = 'https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2022/02/04092753/Pactimo-Feature-Image.jpg'
  return (
  <>
  <Navigation/>
  <ProductPageHeader
  titre={titre}
  image={image}
  />
  <div class="relative container px-4 mx-auto">
    <div class="max-w-md">
        <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">{titre}</span>
        <h3 class="mb-10 text-4xl md:text-5xl font-bold tracking-tighter">Galerie</h3>
      </div>
    <div class="flex flex-wrap -mx-3 mb-20">
      {allTextiles?.nodes?.map((value, key)=>{
        return (
          <OneProduct
          key={key}
          image={value?.image}
          titre={value?.titre}
          description={value?.description}
          lien={value?.lien}
          />
        )
      })}
    </div>
  </div>
  <Contact/>
  </>
  );
};

export const query = graphql`
  {
    allTextiles: allDatoCmsTextile {
      nodes {
        titre
        lien
        description
        image {
          url
        }
      }
    }
  }
`;