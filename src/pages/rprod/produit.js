import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Produit({ data: { allProduits } }) {
  const menuArray = ['immobilier', 'produit', 'sport', 'wedding'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Produits'
  return (
  <>
  <Navigation
  menuItems={menuArray}
  logo={logo}
  />
  <ProductPageHeader
  titre={titre}
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