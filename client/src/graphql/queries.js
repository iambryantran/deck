import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMeQuery {
    me {
      _id
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;

export const FIND_JOBS = gql`
  query Query {
    findAllJobs {
      _id
      company
      location
      salary
      title
      link
    }
  }
`;
