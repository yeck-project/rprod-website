import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import ProductPageHeader from "../components/productPageHeader";
import OneProduct from "../components/oneProduct";

export default function Index({ data: { allPosts, site, blog } }) {

  return (
  <>
  <ProductPageHeader/>
  <OneProduct/>
  <OneProduct/>
  <OneProduct/>
  </>
  );
}

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
`;
