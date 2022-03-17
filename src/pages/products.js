import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import ProductPageHeader from "../components/productPageHeader";
import OneProduct from "../components/oneProduct";
import Navbar from "../components/navigation";
import Contact from "../components/contact";

export default function Index() {

  return (
  <>
  <ProductPageHeader/>
  <div class="relative container px-4 mx-auto">
    <div class="flex flex-wrap -mx-3 mb-20">
      <OneProduct/>
    </div>
  </div>
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
