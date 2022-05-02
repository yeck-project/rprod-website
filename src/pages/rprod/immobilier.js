import React from "react";
import { graphql } from "gatsby";
import ProductPageHeader from "../../components/productPageHeader";
import Photos from "../../components/photoList";

export default function Immobilier({ data: { allImmobiliers } }) {
  return (
  <>
  <Photos
  photos={allImmobiliers?.nodes}
  titre={allImmobiliers?.nodes}
  />
  </>
  );
};

export const query = graphql`
  {
    allImmobiliers: allDatoCmsImmobilier {
      nodes {
        image {
          url
        }
      }
    }
  }
`;