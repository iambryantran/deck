const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
  salary: {
    type: Number,
  },
  tags: {
    type: [String],
  },
  link: {
    type: String,
  },
  applied: {
    type: Boolean,
  },
});

const Job = model("Job", jobSchema);

module.exports = Job;
