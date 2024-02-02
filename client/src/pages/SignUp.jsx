import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';



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
    <Page isProtected={false} headContent={headContent} container>
      <Grid container xs display="flex" justifyContent="center" alignItems="center" rowSpacing={1}
        sx={{
          '& > :not(style)': { m: 1 ,width: '35ch' },
        }}
      >

        <form onSubmit={handleFormSubmit}>
        <Grid alignItems="center">
        <div >Sign Up</div>
        </Grid>


        <Grid item xs={15} md={12}>
          {/* <label>First Name</label> */}
        <TextField 
          id="aa" label="First Name" variant="filled" size="small" 
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        </Grid>

        <Grid item xs={15} md={12}>
        {/* <label>Last Name</label> */}
        <TextField id="ab" label="Last Name" variant="filled" size="small"
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        </Grid>

        <Grid item xs={15} md={12}>
        {/* <label>Email</label> */}
        <TextField id="ac" label="Email" variant="filled" size="small"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        </Grid>

        <Grid item xs={15} md={12}>
        {/* <label>Password </label> */}
        <TextField id="ad" label="Password" variant="filled" size="small"
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        </Grid>

          {loading ? ( 
          <Button type="submit" variant="contained" disabled={true} style={styles.submitBtn}>
            Loading...
          </Button>
        ) : (
          <Button type="submit" variant="contained" style={styles.submitBtn}>
            Submit
          </Button>
        )}
      </form>
      </Grid>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}
