import React from "react";
import Container from "../components/container";
import HomepageContent from "../components/homepageContent";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index() {
  const image = 'https://trek.scene7.com/is/image/TrekBicycleProducts/b300_mtbMarqueeImage?$responsive-pjpg$&cache=on,on&wid=1920';
  const image2 = 'https://brunolarue.com/wp-content/uploads/2021/02/attire-loeil-de-la-personne-qui-prend-des-photographies-1200x800.jpg';
  const logo = 'https://res.cloudinary.com/yet/image/upload/v1642532967/Fichier_3_pxxic0.png'
  return (
  <section class="flex flex-col sm:flex-row h-screen sm:h-screen">
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        image={image}
        logo={logo}
        link={"/rprodbike"}
      />
    </div>
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        image={image2}
        logo={logo}
        link={"/rprodmedia"}
      />
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
