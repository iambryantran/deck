import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUserMutation(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContactMutation(
    $name: String!
    $title: String!
    $location: String!
    $website: String!
    $skills: [String]!
    $resume: String!
    $contactInfo: String!
  ) {
    addContact(
      name: $name
      title: $title
      location: $location
      website: $website
      skills: $skills
      resume: $resume
      contactInfo: $contactInfo
    ) {
      _id
      name
      title
      location
      website
      skills
      resume
      contactInfo
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($job: JobInput) {
    addJob(job: $job) {
      _id
      title
      company
      location
      description
      salary
      tags
      link
      applied
      user {
        _id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  }
`;
