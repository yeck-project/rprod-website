import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Header from "../../components/header";
import Brands from "../../components/brands";
import ProductTypes from "../../components/productTypes";
import Navigation from "../../components/navigation";
import Contact from "../../components/contact";

export default function Bike() {
  const menuArray = ['Textiles', 'Protection', 'Nutrition', 'RprodMedia'];
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png';
  return (
  <>
  <div class="overflow-hidden">
    <Navigation
      menuItems={menuArray}
      logo={logo}
    />
    <Header
      imageHeader1={"https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg"}
      imageHeader2={"https://thumbnails.mtb-news.de/cache/1200_640_1_1_0/5f/aHR0cHM6Ly93d3cubXRiLW5ld3MuZGUvbmV3cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9hcmM4LXRpdGVsLTk1NDMtMS5qcGc.jpg"}
      headerTitle={"Test"}
    />
    <Brands
      brandsTitle={"Les marques que je représente"}
      brandImage1={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
      brandImage2={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
      brandImage3={"https://www.supertour.fr/wp-content/uploads/2020/01/logo_bis.png"}
    />
    <ProductTypes
      productsTitle={"Les produits que je propose"}
      productImage1={"https://d3spv9lkjdky95.cloudfront.net/default/media/_/page/mountain-bike-jerseys.jpg"}
      productImage2={"https://images.singletracks.com/blog/wp-content/uploads/2020/06/DSC3905.jpg"}
      productImage3={"https://d3spv9lkjdky95.cloudfront.net/default/media/_/page/mountain-bike-jerseys.jpg"}
      productImage4={"https://d3spv9lkjdky95.cloudfront.net/default/media/_/page/mountain-bike-jerseys.jpg"}
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
    </div>
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
