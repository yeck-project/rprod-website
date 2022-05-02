import React from "react";
import Container from "../components/container";
import HomepageContent from "../components/homepageContent";
import { graphql } from "gatsby";

export default function Index({ data: {allImageDeFonds, allLogos } }) {
  console.log(allLogos)
  return (
  <section style={{backgroundImage: `url(${allImageDeFonds?.nodes?.[0]?.image?.url})`}} class="flex flex-col sm:flex-row h-screen sm:h-screen bg-center bg-cover">
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        logo={allLogos?.nodes?.[0]?.logoRbike?.url}
        link={allLogos?.nodes?.lienrbike}
      />
    </div>
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        logo={allLogos?.nodes?.[0]?.logoRprod?.url}
        link={allLogos?.nodes?.[0]?.lienrprod}
      />
    </div>
  </section>
  );
}
export const query = graphql`
  {
    allImageDeFonds: allDatoCmsImageDeFond {
      nodes {
        image {
          url
        }
      }
    },
    allLogos: allDatoCmsLogo {
      nodes {
        lienrbike
        lienrprod
        logoRbike {
          url
        }
        logoRprod {
          url
        }
      }
    },
  }
`;
