import { useState } from "react";
import Page from "../components/Page";
import CardComponent from "../components/dashboardCard";
import JobAdd from "../components/JobAdd";
import AddContact from "../components/AddContact";
import {
  Button,
  Container,
  Box,
  Typography,
  Stack,
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
            <Typography variant="h4" sx={{ maxWidth: 500, color: "#fff" }}>
              Welcome to your ob Library. Here you can store all your job
              applications in one place or add new connections.{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ maxWidth: 400, color: "#fff" }}
            >
              Newly added jobs and contacts will appear in the Gallery. 
            </Typography>
          </Box>
          <Box>
            <Stack spacing={2} direction="row">
              <Button
                sx={{ background: "#fff", color: "rgb(35, 81, 87)" }}
                variant="contained"
                size="large"
                onClick={() => setShowForm(!showForm)}
              >
                {!showForm ? "Add New Job" : " Hide Job Form"}
              </Button>

              <JobAdd open={showForm} onClose={() => setShowForm(false)} />

              <Button
                sx={{ background: "#fff", color: "rgb(35, 81, 87)" }}
                variant="contained"
                size="large"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                {!showContactForm ? "Add New Contact" : " Hide Contact Form"}
              </Button>
            </Stack>
          </Box>
          <AddContact
            open={showContactForm}
            onClose={() => setShowContactForm(false)}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <CardComponent image="/workimg1.png" />
            <CardComponent image="/workimg2.png" />
            <CardComponent image="/workimg3.png" />
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
