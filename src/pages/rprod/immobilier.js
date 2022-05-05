import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Immobilier({ data: { allImmobiliers } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  const titre = 'Immmobilier';
  const image = 'https://res.cloudinary.com/dnspsw5d4/image/upload/v1649523318/r%20prod/immobilier/DSCF4867_wbpbsn.jpg'
  return (
  <>
  <Navigation
  logo={logo}
  />
  <ProductPageHeader
  titre={titre}
  image={image}
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