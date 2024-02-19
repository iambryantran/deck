import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT } from "../graphql/mutations";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  TextField,
} from "@mui/material";

const AddContact = ({ open, onClose }) => {
  const [addContact, { error }] = useMutation(ADD_CONTACT);

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    location: "",
    website: "",
    skills: "",
    resume: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);

    try {
      const { data } = await addContact({
        variables: { contact: {
          ...formState
        }}
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>New Contact</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <TextField
                variant="outlined"
                label="Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Company Name"
                name="company"
                value={formState.company}
                onChange={handleChange}
              />
            </Stack>
            <TextField
              variant="outlined"
              label="Location"
              name="location"
              value={formState.location}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Website"
              name="website"
              value={formState.website}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Contact Information"
              name="contactInfo"
              value={formState.contactInfo}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddContact;
