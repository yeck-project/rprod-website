import React, { useEffect } from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Brands from "../../components/brands";
import ProductTypes from "../../components/productTypesRbike";
import Navigation from "../../components/navigationRbike";
import Contact from "../../components/contact";

export default function Bike({ data: { allRbikeGenerals, allMarquesBikes, allRbikeCategories } }) {
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  useEffect(() => window.scrollTo(0, 0), [])
  return (
  <>
  <div class="overflow-hidden">
    <Navigation/>
    <Header
      imageHeader1={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649520933/r%20prod/sport/DSCF1982_hf1lln.jpg"}
      imageHeader2={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649521819/r%20prod/sport/DSCF0898-3_yhvqll.jpg"}
      headerTitle={allRbikeGenerals?.nodes?.[0]?.titre}
    />
    <Brands
      brands={allMarquesBikes?.nodes}
      titre={allRbikeGenerals?.nodes?.[0]?.titremarque}
    />
    <ProductTypes
      products={allRbikeCategories?.nodes}
      titre={allRbikeGenerals?.nodes?.[0]?.titrecategorie}
    />
    <Contact/>
    </div>
  </>
  );
}
export const query = graphql`
  {
    allRbikeGenerals: allDatoCmsRbikeGeneral {
      nodes {
        titre
        titrecategorie
        titremarque
        image {
          url
        }
      }
    },
    allMarquesBikes: allDatoCmsMarqueBike {
      nodes {
        image {
          url
        }
      }
    },
    allRbikeCategories: allDatoCmsRbikeCategory {
      nodes {
        titre
        image {
          url
        }
      }
    },
  }
`;
