const typeDefs = `

  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    createdAt: String
    updatedAt: String
  }

  type Job {
    _id: ID!
    title: String
    company: String
    location: String
    description: String
    salary: Int
    tags: [String]
    link: String
    applied: Boolean
    user: User
}

type Contact {
  _id: ID
  name: String
  title: String
  location: String
  website: String
  skills: [String]
  resume: String
  contactInfo: String
  user: User
}

input JobInput {    
  title: String
  company: String
  location: String
  description: String
  salary: Int
  tags: [String]
  link: String
  applied: Boolean
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    findAllJobs: [Job]
    findSingleJob(id: ID!): Job
    findAllJobsByTags(tags: [String]) : [Job]
    findAllContacts: User
    findAllJobsByLocation(location: String): [Job]
    findAllAppliedJobs(applied: Boolean): [Job]
    findAllNotAppliedJobs(applied: Boolean): [Job]
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addJob(job: JobInput): Job
    addContact(name: String!, title: String!, location: String!, website: String!, skills: [String]!, resume: String!, contactInfo: String!): User
  }
`;

module.exports = typeDefs;

// Remove password from type User
//password: String!

// findAllTag(tags: [String]) : Job.tags
