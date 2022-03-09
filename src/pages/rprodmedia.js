import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../components/header";
import Brands from "../components/brands";
import ProductTypes from "../components/productTypes";
import Navigation from "../components/navigation";
import Contact from "../components/contact";

export default function Bike() {
  const menuArray = ['Sport', 'Produits', 'Entreprise', 'RprodBike'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  return (
  <>
  <Navigation
    menuItems={menuArray}
    logo={logo}
  />
  <Header
    imageHeader1={"https://www.exportpaca.com/wp-content/uploads/2020/08/25434-755-austin-distel-wD1LRb9OeEo-unsplash.jpg"}
    imageHeader2={"https://www.exportpaca.com/wp-content/uploads/2020/08/25434-755-austin-distel-wD1LRb9OeEo-unsplash.jpg"}
    headerTitle={"Test"}
  />
  <Brands
    brandsTitle={"Les entreprises avec qui j'ai collaboré"}
    brandImage1={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
    brandImage2={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
    brandImage3={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
  />
  <ProductTypes
    productsTitle={"Les produits que je propose"}
    productImage1={"https://www.couleursgaia.com/uploads/2021/02/soins-capillaires-bio-couleurs-gaia-768x509.jpg"}
    productImage2={"https://www.couleursgaia.com/uploads/2021/02/soins-capillaires-bio-couleurs-gaia-768x509.jpg"}
    productImage3={"https://www.couleursgaia.com/uploads/2021/02/soins-capillaires-bio-couleurs-gaia-768x509.jpg"}
    productImage4={"https://www.couleursgaia.com/uploads/2021/02/soins-capillaires-bio-couleurs-gaia-768x509.jpg"}
    productTitle1={"Textiles"}
    productTitle2={"Protection"}
    productTitle3={"Nutrition"}
    productTitle4={"Composants"}
    productLink1={"/bike"}
    productLink2={"/bike"}
    productLink3={"/bike"}
    productLink4={"/bike"}
  />
  <Contact/>
  </>
  );
}
/*
export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;*/
