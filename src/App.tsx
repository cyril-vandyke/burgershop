import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

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
        <Routes />
      </ThemeProvider>
    </Router>
  );
};

export default App;
