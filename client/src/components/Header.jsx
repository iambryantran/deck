import { Link } from "react-router-dom";
import AuthServices from "../utils/auth";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';


import AccountCircle from "@mui/icons-material/AccountCircle";

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


  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { isAuthenticated } = useSelector(getUser());

  const handleLogout = (e) => {
    AuthServices.logout();
  };

  const settings = ["Profile", "Account", "Logout"];



  const list = (anchor) => (
    <Box
      sx={{}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
              <Link to={"/about"}>
                <Button sx={{ color: "black" }}>About</Button>
              </Link>
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
            <DashboardIcon sx={{ color: 'inherit'}}/>
            </ListItemIcon>
              <Link to={"/dashboard"}>
                <Button sx={{ color: "black" }}>Dashboard</Button>
              </Link>
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <BrowseGalleryIcon />
            </ListItemIcon>
              <Link to={"/gallery"}>
                <Button sx={{ color: "black" }}>Gallery</Button>
              </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#408C93" }}>
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
            Career Cache

           {isAuthenticated && (
              <div>
                <MenuIcon />
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      {anchor}
                    </Button>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            )}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project-3 Starter Code

          </Typography>

          <div style={styles.buttonDiv}>
            {!isAuthenticated && (
              <Link to={"/signup"}>
                <Button sx={{ color: "white" }}>Sign Up</Button>
              </Link>
            )}
            {!isAuthenticated && (
              <Link to={"/login"}>
                <Button sx={{ color: "white" }}>Login</Button>
              </Link>
            )}
          </div>

          {isAuthenticated && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}

                  sx={{ p: 0, color: "inherit", size: "large" }}
                >
                  {/* <Avatar alt="Remy Sharp" src="" /> */}
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", justifyContent: "end" }}

                  sx={{ p: 0, color: "inherit" }}
                >
                  <AccountCircle sx={{ fontSize: "36px" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}

                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting} </Typography>
                  </MenuItem>
                ))}
                {/* <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Button onClick={handleLogout} sx={{color:'inherit' }} >

                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={handleLogout} sx={{ color: "inherit" }}>

                    Logout
                  </Button>
                </MenuItem>
              </Menu>

              {isAuthenticated && (
                <Link to={"/dashboard"}>
                  <Button sx={{ color: "white" }}>Dashboard</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Link to={"/about"}>
                  <Button sx={{ color: "white" }}>About</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Link to={"/gallery"}>
                  <Button sx={{ color: "white" }}>Gallery</Button>
                </Link>
              )}
              {isAuthenticated && (
                <Button onClick={handleLogout} sx={{ color: "white" }}>
                  Logout
                </Button>
              )}


            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
