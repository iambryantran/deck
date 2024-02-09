import { useState } from "react";
import Page from "../components/Page";
import JobAdd from "../components/JobAdd";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  TextField,
} from "@mui/material";

const headContent = (
  <>
    <title>Career Cache</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  return (
    <Page isProtected={true} headContent={headContent}>
      <h1>
        Welcome to your job Library. Here you can store all your job
        applications in one place or add new connections.{" "}
      </h1>
      <button onClick={() => setShowForm(!showForm)}>
        {!showForm ? "Add New Job" : " Hide Job Form"}
      </button>
      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <DialogTitle>Some Form</DialogTitle>
        <DialogContent>
          {/* <JobAdd /> */}
          <Stack spacing={2}>
            <Stack direction={"row"} spacing={2}>
              <TextField variant="outlined" label="hello world" />
              <TextField variant="outlined" />
            </Stack>
            <TextField variant="outlined" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}
