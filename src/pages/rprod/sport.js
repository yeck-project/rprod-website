import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Sport({ data: { allSports } }) {
  const menuArray = ['immobilier', 'produit', 'sport', 'wedding'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Sport'
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
  photos={allSports?.nodes}
  titre={titre}
  />
  <Contact/>
  </>
  );
};

export const query = graphql`
  {
    allSports: allDatoCmsSport {
      nodes {
        image {
          url
        }
      }
    }
  }
`;