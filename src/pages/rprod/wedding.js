import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Immobilier({ data: { allWeddings } }) {
  const menuArray = ['immobilier', 'produit', 'sport', 'wedding'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Wedding';
  const image = 'https://res.cloudinary.com/dnspsw5d4/image/upload/v1649522803/r%20prod/wedding/DSCF1194_fqewd0.jpg'
  return (
  <>
  <Navigation
  menuItems={menuArray}
  logo={logo}
  />
  <ProductPageHeader
  titre={titre}
  image={image}
  />
  <Photos
  photos={allWeddings?.nodes}
  titre={titre}
  />
  <Contact/>
  </>
  );
};

export const query = graphql`
  {
    allWeddings: allDatoCmsWedding {
      nodes {
        image {
          url
        }
      }
    }
  }
`;