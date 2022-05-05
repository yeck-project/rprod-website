import React from "react";
import Container from "../components/container";
import HomepageContent from "../components/homepageContent";
import { graphql } from "gatsby";

export default function Index({ data: {allImageDeFonds, allLogos } }) {
  return (
  <section style={{backgroundImage: `url(${allImageDeFonds?.nodes?.[0]?.image?.url})`}} class="flex flex-col sm:flex-row h-screen sm:h-screen bg-center bg-cover">
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        logo={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649520105/logo/Fichier_4_qeikye.png"}
        link={"/rprod"}
        image={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649523318/r%20prod/immobilier/DSCF4867_wbpbsn.jpg"}
      />
    </div>
    <div class="w-full sm:w-1/2 h-1/2 sm:h-full">
      <HomepageContent
        logo={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649520105/logo/Fichier_5_im5yva.png"}
        link={"/rbike"}
        image={"https://res.cloudinary.com/dnspsw5d4/image/upload/v1649613021/r%20prod/people/DSCF0942-3_zobay1.jpg"}
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
