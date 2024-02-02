import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Page from "../components/Page";
import AuthService from "../utils/auth";




const styles = {
  // form: {
  //   display: "flex",
  //   flexDirection: "Column",
  //   width: "300px",
  // },
  submitBtn: {
    cursor: "pointer",
  },
};

const headContent = (
  <>
    <title>Change Me! - Sign Up</title>
    <meta
      name="description"
      content="Sign Up page for Project-3 Starter Code."
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
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>Sign Up</div>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <form onSubmit={handleFormSubmit}>
        <TextField 
          id="aa" label="First Name" variant="filled" 
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <TextField id="ab" label="Last Name" variant="filled" 
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <TextField id="ac" label="Email" variant="filled" 
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <TextField id="ad" label="Password" variant="filled" 
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
          {loading ? (
          <button type="submit" disabled={true} style={styles.submitBtn}>
            Loading...
          </button>
        ) : (
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        )}
      </form>
      {/* <form style={styles.form} onSubmit={handleFormSubmit}>
      <TextField id="filled-basic" label="First Name" variant="filled" 
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <TextField id="filled-basic" label="Last Name" variant="filled" 
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <TextField id="filled-basic" label="Email" variant="filled" 
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <TextField id="filled-basic" label="Password" variant="filled" 
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />

        <input 
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {loading ? (
          <button type="submit" disabled={true} style={styles.submitBtn}>
            Loading...
          </button>
        ) : (
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        )}
      </form> */}
      </Box>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}
