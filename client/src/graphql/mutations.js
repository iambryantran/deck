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
  mutation addContact($contact: ContactInput) {
    addContact(contact: $contact) {
      _id
      name
      company
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
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJobAppliedStatus($id: ID, $applied: Boolean) {
    updateJob(id: $id, applied: $applied) {
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

export const DELETE_JOB = gql`
  mutation deleteJob($id: ID) {
    deleteJob(id: $id) {
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