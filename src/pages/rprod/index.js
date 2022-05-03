import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Brands from "../../components/brands";
import ProductTypes from "../../components/productTypesRprod";
import Navigation from "../../components/navigationRprod";
import Contact from "../../components/contact";

export default function Prod({ data: { allRprodGenerals, allMarquesProds, allRprodCategories } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  return (
  <>
  <div class="overflow-hidden">
    <Navigation
      logo={logo}
    />
    <Header
      imageHeader1={allRprodGenerals?.nodes?.[0]?.image?.url}
      imageHeader2={allRprodGenerals?.nodes?.[0]?.image?.url}
      headerTitle={allRprodGenerals?.nodes?.[0]?.titre}
    />
    <Brands
      brands={allMarquesProds?.nodes}
      titre={allRprodGenerals?.nodes?.[0]?.titremarque}
    />
    <ProductTypes
      products={allRprodCategories?.nodes}
      titre={allRprodGenerals?.nodes?.[0]?.titrecategorie}
    />
    <Contact/>
    </div>
  </>
  );
}
export const query = graphql`
  {
    allRprodGenerals: allDatoCmsRprodGeneral {
      nodes {
        titre
        titrecategorie
        titremarque
        image {
          url
        }
      }
    },
    allMarquesProds: allDatoCmsMarqueProd {
      nodes {
        image {
          url
        }
      }
    },
    allRprodCategories: allDatoCmsRprodCategory {
      nodes {
        titre
        image {
          url
        }
      }
    },
  }
`;
