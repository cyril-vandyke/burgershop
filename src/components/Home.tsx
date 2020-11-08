import React from "react";
import Typography from "@material-ui/core/Typography";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h2">Welcome to Cyril's Burgershoppe!</Typography>
      <Typography variant="h4">
        Trying to get on Diners, Drive Ins, and Dives since 2020
      </Typography>
      <Typography variant="body1">
        Check out our menu via the navigation bar.
      </Typography>
    </React.Fragment>
  );
};

export default Home;
