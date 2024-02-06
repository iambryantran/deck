const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    website: {
        type: String,
    },
    skills: {
        type: [String],
    },
    resume: {
        type: String,
    },
    contactInfo: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
