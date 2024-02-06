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
    _id: ID
    title: String
    company: String
    location: String
    description: String
    salary: Int
    tags: [String]
    link: String
    applied: Boolean
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
    findAllJobByTags(tags: [String]) : [Job]
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addJob(job: JobInput): Job
  }
`;

module.exports = typeDefs;

// Remove password from type User
//password: String!

// findAllTag(tags: [String]) : Job.tags
