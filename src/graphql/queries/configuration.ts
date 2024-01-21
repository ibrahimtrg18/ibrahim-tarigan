import { gql } from "@apollo/client";

export const QUERY_GET_ALL_CONFIGURATION = gql`
  query Configuration {
    configurations {
      id
      about {
        firstName
        lastName
        fullName
        shortName
        initialName
        email
        phoneNumber
        whoiam
        greeting
        description {
          text
        }
        cv
        lat
        lng
        location
      }
      maintenance {
        title
        text
        farewell
        signature
      }
      menu {
        id
        label
        pathname
        slug
        href
      }
      socials: social {
        id
        label
        link
        icon
        stage
      }
    }
  }
`;
