import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const settings = ['Profile', 'Account', 'Logout'];
const pages = ['Dashboard', 'Gallery', 'About'];




const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "0",
    width: "100%",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    margin: "0.5rem",
  },
  undecoratedLink: {
    textDecoration: "none",
  },
};


export default function Header() {
  const { isAuthenticated } = useSelector(getUser());

  const handleLogout = (e) => {
    AuthServices.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#408C93'}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Project-3 Starter Code
        </Typography>


        
        <div style={styles.buttonDiv}>
              {isAuthenticated && (
                <Link to={"/about"}>
                  <Button sx={{color:'white' }} >About</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Link to={"/dashboard"}>
                  <Button sx={{color:'white' }} >Dashboard</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Link to={"/gallery"}>
                <Button sx={{color:'white' }} >Gallery</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Button onClick={handleLogout} sx={{color:'white' }} >
                  Logout
                </Button>
              )}
              {!isAuthenticated && (
                <Link to={"/signup"}> 
                  <Button sx={{color:'white' }} >Sign Up</Button>
                </Link>
              )}
              {!isAuthenticated && (
                <Link to={"/login"}>
                  <Button sx={{color:'white' }}
                  >Login</Button>
                </Link>
              )}
            </div>
        </Toolbar>
    </AppBar>
    </Box>
  );
}
