import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Produit({ data: { allProduits } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Produits';
  const image = 'https://res.cloudinary.com/dnspsw5d4/image/upload/v1649618572/r%20prod/produit/DSCF0294_cmytfl.jpg'
  return (
  <>
  <Navigation/>
  <ProductPageHeader
  titre={titre}
  image={image}
  />
  <Photos
  photos={allProduits?.nodes}
  titre={titre}
  />
  <Contact/>
  </>
  );
};

export const query = graphql`
  {
    allProduits: allDatoCmsProduit {
      nodes {
        image {
          url
        }
      }
    }
  }
`;