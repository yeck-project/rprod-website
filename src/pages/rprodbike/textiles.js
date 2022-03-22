import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import OneProduct from "../../components/oneProduct";
import Contact from "../../components/contact";

export default function Textiles({ data: { allTextiles } }) {
  return (
  <>
  <ProductPageHeader/>
  <div class="relative container px-4 mx-auto">
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