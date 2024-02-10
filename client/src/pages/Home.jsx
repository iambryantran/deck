import Page from "../components/Page";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import { getUser } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom"
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from "@mui/material/Grid";




const headContent = (
  <>
    <title>Career Cache</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {

  const { isAuthenticated } = useSelector(getUser());

  return (
    <Page isProtected={false} headContent={headContent}>
      {!isAuthenticated && (
        <Container component="main" maxWidth="sm" sx={{mt: 3, mb: 2}}>
          <Box 
          sx={{
            marginTop: 10,
            display: "flex",
            border: "2px solid rgba(255, 255, 255, .2)",
            borderRadius: "15px ",
            padding: "80px 50px 80px ",
            boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
            backgroundColor: '#408C93',
            flexDirection: 'column',
            alignItems: 'center',
            color: "#fff",
          }}
          > 
          <WorkIcon sx={{ color: "#143033", fontSize: "47px",}}/>
            <h1>
              Welcome to Career Cache
            </h1>
            <p>your one stop shop for all things career
              focused. Please create an account or log-in if you are already
              registered!
            </p>
            <Grid display="flex" justifyContent="space-between">
              <CheckCircleIcon sx={{fontSize: "20px", color: "#143033"}}/>
                Easy job search
              <CheckCircleIcon sx={{fontSize: "20px", color: "#143033"}}/>
              Easy job search
            </Grid>
            <Grid>
              <CheckCircleIcon sx={{fontSize: "20px", color: "#143033"}}/>
              Easy job search
              <CheckCircleIcon sx={{fontSize: "20px", color: "#143033"}}/>
              Easy job search
            </Grid>
            <Link to= {"/signup"}>
              <Button fullWidth
              variant="contained" 
              sx={{ 
                mt: 3, mb: 2, backgroundColor: "#6DA5C0", cursor: "pointer", padding: "25px ", color: ""}}>
                Create new account
                </Button>
            </Link>
          </Box>
        </Container>
      )}
      {isAuthenticated && (
          <Container component="main" maxWidth="sm" sx={{mt: 3, mb: 2}}>
          <Box 
          sx={{
            marginTop: 10,
            display: "flex",
            border: "2px solid rgba(255, 255, 255, .2)",
            borderRadius: "15px ",
            padding: "80px 50px 80px ",
            boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
            backgroundColor: '#408C93',
            flexDirection: 'column',
            alignItems: 'center',
            color: "#fff",
          }}
          > 
          <WorkIcon sx={{ color: "#143033", fontSize: "47px",}}/>
            <h1>
              Almost there 
            </h1>
            <p>
              You've taken the first step to getting that new job you want.
            </p>
            <Link to= {"/dashboard"}>
              <Button fullWidth
              variant="contained" 
              sx={{ 
                mt: 3, mb: 2, backgroundColor: "#6DA5C0", cursor: "pointer", padding: "25px ", color: ""}}>
                Add new job 
                </Button>
            </Link>
          </Box>
        </Container>
      )}
    </Page>
  );
}
