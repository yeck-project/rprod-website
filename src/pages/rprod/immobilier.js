import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Immobilier({ data: { allImmobiliers } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Immmobilier'
  return (
  <>
  <Navigation
  logo={logo}
  />
  <ProductPageHeader
  titre={titre}
  />
  <Photos
  photos={allImmobiliers?.nodes}
  titre={titre}
  />
  <Contact/>
  </>
  );
};

export const query = graphql`
  {
    allImmobiliers: allDatoCmsImmobilier {
      nodes {
        image {
          url
        }
      }
    }
  }
`;