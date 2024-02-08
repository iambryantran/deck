import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import '../Styles/LoginForm.css'
import { Link } from 'react-router-dom'
import { FaUser, FaLock } from "react-icons/fa";
// import { Stack } from '@mui/material';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Page from "../components/Page";
import AuthService from "../utils/auth";

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    // width: "300px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};

const headContent = (
  <>
    <title>Change Me! - Login</title>
    <meta name="description" content="Login for Project-3 Starter Code." />
  </>
);

export default function Login() {
  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
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
      const { data } = await loginUser({
        variables: { ...formState },
      });

      AuthService.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (

      <Page isProtected={false} headContent={headContent} bodyStyles={{ backgroundColor: 'seagreen' }}> 
        <Container component="main" maxWidth="xs">
          <Box
            
            sx={{
              marginTop: 8,
              display: 'flex',
              backgroundColor: '#408C93',
              border: '2px solid rgba(255, 255, 255, .2)',
              backdropFilter: 'blur(30px)',
              // borderWidth: '1px',
              width: '420px',
              borderRadius: '10px',
              padding: '30px 40px',
              // color: '#fff',
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
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3, color: '#fff',}} > 
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    // variant="filled"
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
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    id="password"
                    // variant="filled"
                    label="Password"
                    placeholder="Password"
                    name="password"
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
                    label="Remember me" sx={{color: 'white'}}
                  />
                </Grid>
            </Grid>
            {loading ? (
              <Button  fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#6DA5C0' }} disabled={true} style={styles.submitBtn}>
                Loading...
              </Button>
            ) : (
              <Button fullWidth type="submit"  variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#6DA5C0' }} style={styles.submitBtn}>
                Login
              </Button>
            )}
              <Grid container justifyContent="">
                <Grid item> Don't have an account?
                  <Link to={"/signup"} variant="body2" sx={{ color: ''}}>
                  Register
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
