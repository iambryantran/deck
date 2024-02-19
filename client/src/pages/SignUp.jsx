import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaUser, FaLock } from "react-icons/fa";
import Page from "../components/Page";
import AuthService from "../utils/auth";

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "450px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};

const headContent = (
  <>
    <title>Sign Up</title>
    <meta
      name="description"
      content="Sign Up Page."
    />
  </>
);

export default function SignUp() {
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      AuthService.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <Page isProtected={false} headContent={headContent} container>
      <Container component="main" maxWidth="xs">
          <Box
          
            sx={{
              marginTop: 8,
              display: 'flex',
              backgroundColor: '#408C93',
              border: '2px solid rgba(255, 255, 255, .2)',
              backdropFilter: 'blur(30px)',
              width: '420px',
              borderRadius: '10px',
              padding: '30px 40px',
              boxShadow: '0 0 10px  rgba(0, 0, 0, .2)',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}></Avatar>
            <Typography component="h1" variant="h5"
            sx={{
              fontSize: "36px",
              marginBottom: '20px',
              color: '#fff'
            }}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3, color: '#fff',}} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ }}>
                  <TextField
                    autoComplete="given-name"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    onChange={handleChange}
                    autoFocus
                    sx={{ color: '#fff'}}
                    InputProps={{
                      style: {
                        borderRadius: "15px",
                        color: 'white',
                        borderColor: '#fff',
                        backgroundColor: '#235157',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    type="text"
                    value={formState.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    InputProps={{
                      style: {
                        borderRadius: "15px",
                        color: 'white',
                        accentColor: '#fff',
                        backgroundColor: '#235157',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    autoComplete="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    InputProps={{
                      style: {
                        borderRadius: "15px",
                        color: 'white',
                        accentColor: '#fff',
                        backgroundColor: '#235157',
                      }
                    }}
                  />
                  <FaUser style={{ fontSize: '18px', position: 'absolute', top: '47%', right: '52px',}} />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    id="password"
                    placeholder="Password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    InputProps={{
                      style: {
                        borderRadius: "15px",
                        color: 'white',
                        accentColor: '#fff',
                        backgroundColor: '#235157',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I am 18 years of age or older and agree to the terms of the ......" sx={{color: 'white'}}
                  />
                </Grid>
              </Grid>
              {loading ? ( 
                <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} disabled={true} style={styles.submitBtn}>
                  Loading...
                </Button>
                ) : (
                <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#6DA5C0' }} style={styles.submitBtn}>
                  Sign Up
                </Button>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <p>Already have an account? </p>
                  <Link to={"/login"} variant="body2" sx={{ color: '#fff'}}>
                    Log In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}

