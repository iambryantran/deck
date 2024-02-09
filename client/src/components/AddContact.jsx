import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../graphql/mutations';

const AddContact = () => {
    const [formState, setFormState] = useState({
        name: '',
        title: '',
        location: '',
        website: '',
        skills: '',
        resume: '',
        contactInfo: '',
    });

    const [addContact, { error }] = useMutation(ADD_CONTACT);   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { 
            name, 
            title, 
            location, 
            website, 
            skills, 
            resume, 
            contactInfo 
        } = formState;

        if (name && contactInfo) {
            const { data } = addContact({
                variables: {
                    name,
                    title,
                    location,
                    website,
                    skills: skills.split(',').map(skill => skill.trim()),
                    resume,
                    contactInfo,
                },
            });
            console.log(data);
            if (data.addContact) {
                setFormState({
                    name: '',
                    title: '',
                    location: '',
                    website: '',
                    skills: '',
                    resume: '',
                    contactInfo: '',
                });
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
            </label>
            <label>
                Job Title:
                <input type="text" name="title"value={formState.title} onChange={handleChange} />
            </label>
            <label>
                Location:
                <input type="text" name="location"value={formState.location} onChange={handleChange} />
            </label>
            <label>
                Website:
                <input type="text" name="title"value={formState.website} onChange={handleChange} />
            </label>
            <label>
                Skills:
                <input type="text" name="title"value={formState.skills} onChange={handleChange} />
            </label>
            <label>
                Resume:
                <input type="text" name="title"value={formState.resume} onChange={handleChange} />
            </label>
            <label>
                Contact Info:
                <input type="text" name="title"value={formState.contactInfo} onChange={handleChange} />
            </label>
        </form>
    );
};

export default AddContact;