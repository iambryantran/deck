import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../graphql/mutations";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  TextField,
} from "@mui/material";

const JobAdd = ({ open, onClose }) => {
  const [addJob, { error }] = useMutation(ADD_JOB);

  const [formState, setFormState] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    link: "",
    tags: [],
    applied: false,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);

    try {
      const { data } = await addJob({
        variables: { job: {
          ...formState,
          salary: parseInt(formState.salary)
        } },
      });
    } catch (e) {
      console.error(e);
    }

    setFormState({
      title: '',
      company: '',
      location: '',
      salary: '',
      link: '',
    });

  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>New Job</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <TextField
                variant="outlined"
                label="Job Title"
                name="title"
                value={formState.title}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Company Name"
                name="company"
                value={formState.companyName}
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
              label="Salary"
              type="number"
              name="salary"
              value={formState.salary}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Link"
              name="link"
              value={formState.link}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={onClose}>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default JobAdd;
