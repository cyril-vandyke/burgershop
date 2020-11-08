import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Navigation from "./components/Navigation";
import Box from "@material-ui/core/Box";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navigation />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          alignSelf="center"
          width="100%"
          height="100vh"
          style={{ paddingTop: "80px" }}
        >
          <Routes />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
