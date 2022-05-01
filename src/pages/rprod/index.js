import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Brands from "../../components/brands";
import ProductTypes from "../../components/productTypes";
import Navigation from "../../components/navigation";
import Contact from "../../components/contact";

export default function Bike({ data: { allRprodGenerals, allMarquesProds, allRprodCategories } }) {
  const menuArray = ['Textiles', 'Protection', 'Nutrition', 'RprodMedia'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  (
  <>
  <div class="overflow-hidden">
    <Navigation
      menuItems={menuArray}
      logo={logo}
    />
    <Header
      imageHeader1={allRprodGenerals?.nodes?.[0]?.image?.url}
      imageHeader2={allRprodGenerals?.nodes?.[0]?.image?.url}
      headerTitle={allRprodGenerals?.nodes?.[0]?.titre}
    />
    <Brands
      brands={allMarquesProds}
    />
    <ProductTypes
      products={allRprodCategories}
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
        image {
          url
        }
      }
    },
    allMarqueProds: allDatoCmsMarqueProd {
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
