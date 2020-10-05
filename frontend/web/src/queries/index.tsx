import { gql } from "@apollo/client";

export const GET_ALL_RECIPES = gql`
  query {
    recipes {
      name
      description
    }
  }
`;
