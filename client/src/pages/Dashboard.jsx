import { useState } from "react";
import Page from "../components/Page";
import CardComponent from "../components/dashboardCard";
import JobAdd from "../components/JobAdd";
import AddContact from "../components/AddContact";
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
  Typography,
} from "@mui/material";

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
        <Box
          sx={{
            p: 3,
            m: 3,
            minWidth: 300,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ maxWidth: 500 }}>
              Welcome to your job Library. Here you can store all your job
              applications in one place or add new connections.{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: 400 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, dolor saepe. Nulla culpa aliquid cumque impedit odio
              eaque dolore sint non quam deserunt eligendi dolor vel ea officia,
              delectus nam accusantium, laborum maiores ab quibusdam temporibus.
              Culpa est sapiente quasi quam corporis aspernatur suscipit
              voluptatem, ad, eos fugiat, necessitatibus dolorem.
            </Typography>
          </Box>
          <Button variant="contained" onClick={() => setShowForm(!showForm)}>
            {!showForm ? "Add New Job" : " Hide Job Form"}
          </Button>

          <JobAdd open={showForm} onClose={() => setShowForm(false)} />

          {/* {showForm && <JobAdd />} */}

          <Button
            variant="contained"
            onClick={() => setShowContactForm(!showContactForm)}
          >
            {!showContactForm ? "Add New Contact" : " Hide Contact Form"}
          </Button>
          <AddContact
            open={showContactForm}
            onClose={() => setShowContactForm(false)}
          />
          {/* <Dialog
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
          </Dialog> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <CardComponent image='/public/workimg1.png'/>
            <CardComponent image='/public/workimg2.png'/>
            <CardComponent image='/public/workimg3.png'/>
          </Box>

          {/* {showContactForm && <AddContact />} */}
        </Box>
      </Container>
    </Page>
  );
}
