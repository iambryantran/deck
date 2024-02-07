import React, { useState } from 'react';

const AddContact = () => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [skills, setSkills] = useState('');
    const [resumeLink, setResumeLink] = useState('');
    const [info, setInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Finish handleSubmit function
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Job Title:
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                Website:
                <input type="text" value={websiteLink} onChange={(e) => setWebsiteLink(e.target.value)} />
            </label>
            <label>
                Skills:
                <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </label>
            <label>
                Resume:
                <input type="text" value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} />
            </label>
            <label>
                Info:
                <input type="text" value={info} onChange={(e) => setInfo(e.target.value)} />
            </label>
        </form>
    );
};

export default AddContact;