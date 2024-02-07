import React, { useState } from 'react';

const JobAdd = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [directLink, setDirectLink] = useState('');
    const [tags, setTags] = useState('');
    const [applied, setApplied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Finish the submit function
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job Title:
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label>
                Company Name:
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
                Salary:
                <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
            </label>
            <label>
                Direct Link:
                <input type="text" value={directLink} onChange={(e) => setDirectLink(e.target.value)} />
            </label>
            <label>
                Tags:
                <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
            </label>
            <label>
                Applied:
                <input type="checkbox" checked={applied} onChange={(e) => setApplied(e.target.checked)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JobAdd;
