import React, { useEffect, useState } from "react";
import { OpalMenu } from "../types";
import axios from "axios";
import fauxMenu from "../project.json";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

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
      <h1>Cyril's Burgermenue</h1>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {opalMenu?.menu.map((menuItem) => (
            <Grid item xs={12} sm={12} md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{menuItem.item}</Typography>
                  <Typography variant="body1">Size Options</Typography>
                  {menuItem.options.map((option) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: "5px",
                      }}
                    >
                      <Typography variant="body2">
                        {option.size} : ${option.price}
                      </Typography>
                      <Button variant="outlined">Add to Cart</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Menu;
