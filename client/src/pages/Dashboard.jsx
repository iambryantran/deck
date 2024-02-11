import { useState } from "react";
import Page from "../components/Page";
// import JobAdd from "../components/JobAdd";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  TextField,
  Container,
  Box,
} from "@mui/material";

// import AddContact from "../components/AddContact";

const headContent = (
  <>
    <title>Career Cache</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <Page isProtected={true} headContent={headContent}>
      <Container maxWidth="lg">
        <h1>
          Welcome to your job Library. Here you can store all your job
          applications in one place or add new connections.{" "}
        </h1>
        <Button variant="contained" onClick={() => setShowForm(!showForm)}>
          {!showForm ? "Add New Job" : " Hide Job Form"}
        </Button>

        {/* <JobAdd /> */}
        <Dialog open={showForm} onClose={() => setShowForm(false)}>
          <DialogTitle>New Job</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <TextField variant="outlined" label="Job Title" />
                <TextField variant="outlined" label="Company Name" />
              </Stack>
              <TextField variant="outlined" label="Location" />
              <TextField variant="outlined" label="Salary" />
              <TextField variant="outlined" label="Link" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>

        {/* {showForm && <JobAdd />} */}

        <Button
          variant="contained"
          onClick={() => setShowContactForm(!showContactForm)}
        >
          {!showContactForm ? "Add New Contact" : " Hide Contact Form"}
        </Button>
        <Dialog
          open={showContactForm}
          onClose={() => setShowContactForm(false)}
        >
          <DialogTitle>New Contact</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <TextField variant="outlined" label="Contact Name" />
                <TextField variant="outlined" label="Title" />
              </Stack>
              <TextField variant="outlined" label="Location" />
              <TextField variant="outlined" label="Website" />
              <TextField variant="outlined" label="Contact Info" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button>Submit</Button>
          </DialogActions>
        </Dialog>

        {/* {showContactForm && <AddContact />} */}
      </Container>
    </Page>
  );
}
