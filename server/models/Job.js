const { Schema, model } = require('mongoose');

const jobCardSchema = new Schema(
    {
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
    }
);

const JobCard = model('JobCard', jobCardSchema);

module.exports = JobCard;