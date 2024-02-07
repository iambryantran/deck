import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import '../Styles/LoginForm.css'
import { Link } from 'react-router-dom'
import { FaUser, FaLock } from "react-icons/fa";
import { Stack } from '@mui/material';

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
        <div>hi</div>
        <Stack sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1
        }}>
          <form className= "wrapper" style={styles.form} onSubmit={handleFormSubmit}>
            <h1 className="loginText">Login</h1>

            <div className="input-box"> 
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <FaUser className="icon"/>
            </div>

            <div className="input-box">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <FaLock className="icon"/>
            </div>

            <div className="remember-forgot">
              <label >
                <input 
                type="checkbox" 
                />
                Remember me
              </label>
              <Link className="forgotLink"> Forgot password?
              </Link>
            </div>

            {loading ? (
              <button type="submit" disabled={true} style={styles.submitBtn}>
                Loading...
              </button>
            ) : (
              <button type="submit" style={styles.submitBtn}>
                Login
              </button>
            )}
            <div className="register-link">
              <p className="pText">Don't have an account? <Link to={'/signup'} className="register"> Register</Link></p>
            </div>
          </form>
        </Stack>
        {error && <h3>{error.message}</h3>}
      </Page>
  );
}
