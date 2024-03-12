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

export const FIND_CONTACTS = gql`
  query Query {
    findAllContacts {
      _id
      name
      company
      location
      website
      resume
      contactInfo
    }
  }
`

export const FIND_APPLIED_JOBS = gql`
  query Query {
    findAllAppliedJobs {
      _id
      company
      location
      salary
      title
      link
    }
  }
`;

export const FIND_NOT_APPLIED_JOBS = gql`
  query Query {
    findAllNotAppliedJobs {
      _id
      company
      location
      salary
      title
      link
    }
  }
`;
