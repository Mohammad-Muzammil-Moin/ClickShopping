import React from "react";
import "./App.css";
import Components from "./Components/Components";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";
import { purple, red } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    secondary: {
      // Purple and green play nicely together.
      main: "#ff0000c9",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Components />
      </Router>
    </ThemeProvider>
  );
}

export default App;
