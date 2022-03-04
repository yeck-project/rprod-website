import React from "react";
import Container from "../components/container";
import HomepageContent from "../components/homepageContent";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index() {

  return (
  <section class="flex flex-col sm:flex-row h-screen sm:h-screen">
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent/>
    </div>
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent/>
    </div>
  </section>
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
