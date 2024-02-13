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
  const [formState, setFormState] = useState({
    jobTitle: "",
    companyName: "",
    description: "",
    location: "",
    salary: "",
    directLink: "",
    tags: "",
    applied: false,
  });

  const [addJob, { error }] = useMutation(ADD_JOB);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    const {
      jobTitle,
      companyName,
      description,
      location,
      salary,
      directLink,
      tags,
      applied,
    } = formState;

    if (jobTitle && companyName && description && location) {
      const { data } = await addJob({
        variables: {
          job: {
            title: jobTitle,
            company: companyName,
            description,
            location,
            salary: parseFloat(salary),
            link: directLink,
            tags,
            applied,
          },
        },
      });
      console.log(data);
      if (data.addJob) {
        setFormState({
          jobTitle: "",
          companyName: "",
          description: "",
          location: "",
          salary: "",
          directLink: "",
          tags: "",
          applied: false,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

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
                name="jobTitle"
                value={formState.jobTitle}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                label="Company Name"
                name="companyName"
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
              name="salary"
              value={formState.salary}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              label="Link"
              name="directLink"
              value={formState.directLink}
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

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Job Title:
  //       <input
  //         type="text"
  //         name="jobTitle"
  //         value={formState.jobTitle}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Company Name:
  //       <input
  //         type="text"
  //         name="companyName"
  //         value={formState.companyName}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Description:
  //       <textarea
  //         name="description"
  //         value={formState.description}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Location:
  //       <input
  //         type="text"
  //         name="location"
  //         value={formState.location}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Salary:
  //       <input
  //         type="number"
  //         name="salary"
  //         value={formState.salary}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Direct Link:
  //       <input
  //         type="text"
  //         name="directLink"
  //         value={formState.directLink}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Tags:
  //       <input
  //         type="text"
  //         name="tags"
  //         value={formState.tags}
  //         onChange={handleChange}
  //       />
  //     </label>
  //     <label>
  //       Applied:
  //       <input
  //         type="checkbox"
  //         name="applied"
  //         checked={formState.applied}
  //         onChange={() =>
  //           setFormState({ ...formState, applied: !formState.applied })
  //         }
  //       />
  //     </label>
  //     <button type="submit">Submit</button>
  //   </form>
  // );
};

export default JobAdd;
