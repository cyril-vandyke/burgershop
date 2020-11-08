import React, { useEffect, useState } from "react";
import { OpalMenu } from "../types";
import axios from "axios";
import fauxMenu from "../project.json";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SingleMenuItem from "./SingleMenuItem";

const Menu: React.FC = () => {
  const [opalMenu, setOpalMenu] = useState<OpalMenu>();

  const getMenu = async () => {
    //TODO - Fix CORS issues. Currently, the Axios request will always fail
    try {
      const response = await axios.get(
        `https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      const opalMenu: OpalMenu = response.data;
      setOpalMenu(opalMenu);
    } catch (error) {
      //The show must go on.
      console.error(error);
      const fauxOpalMenu: OpalMenu = fauxMenu;
      setOpalMenu(fauxOpalMenu);
    }
  };

  useEffect(() => {
    //Get the menu!
    getMenu();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h2">Cyril's Burgermenue</Typography>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {opalMenu?.menu.map((menuItem) => (
            <SingleMenuItem item={menuItem} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Menu;
