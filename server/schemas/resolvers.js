const { User, Job , Contact } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { dateScalar } = require("./scalar");

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await User.findById(context.user._id);
    },
    findAllJobs: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const jobs = await Job.find({ user: context.user._id });
      return jobs;
    },
    // findAllContacts: async (parent, args, context) => {
    //   if (!context.user) {
    //     throw AuthenticationError;
    //   }
    //   const contacts = await Contact.find({ user: context.user._id });
    //   return contacts;
    // },
    findSingleJob: async (parent, { id }) => {
      const singleJob = await Job.findById(id);
      return singleJob;
    },
    findAllJobsByTags: async (parent, args) => {
      try {
        const { tags: tagsArr } = args;

        const jobs = await Job.find({
          tags: { $in: tagsArr },
        });

        return jobs;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },

  Mutation: {
    addUser: async (parent, argObj) => {
      try {
        const user = await User.create(argObj);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw UserInputError;
      }
    },
    addJob: async (parent, args, context) => {
      try {
        if (!context.user) {
          throw AuthenticationError;
        }
        const job = await Job.create(args.job);
        return job;
      } catch (err) {
        console.log(err);
      }
    },
    // addContact: async (parent, args, context) => {
    //   try {
    //     if (!context.user) {
    //       throw AuthenticationError;
    //     }
    //     const contact = await Contact.create(args.contact);
    //     return contact;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log("user", user);
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
