import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Cyril's Burgershoppe</Typography>
        <Button component={RouterLink} to="/">
          Home
        </Button>
        <Button component={RouterLink} to="/menu">
          Menu
        </Button>
        <Button component={RouterLink} to="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
