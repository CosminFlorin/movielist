import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import 'typeface-roboto';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Grid container>
          <Grid item xs={8} 	>
            <Typography className="Typograpy" style={{paddingTop: "6px"}} > Movie List </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color="inherit">Login</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};



export default Header;