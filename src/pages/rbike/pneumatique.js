import React, { useEffect } from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import OneProduct from "../../components/oneProduct";
import Contact from "../../components/contact";
import Navigation from "../../components/navigationRbike";

export default function Pneumatiques({ data: { allPneumatiques } }) {
  useEffect(() => window.scrollTo(0, 0), [])
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Pneumatiques';
  const image = 'https://trek.scene7.com/is/image/TrekBicycleProducts/MTBtires_Marquee_Top?$responsive-pjpg$&cache=on,on&wid=1920'
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
      {allPneumatiques?.nodes?.map((value, key)=>{
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
    allPneumatiques: allDatoCmsPneumatique {
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