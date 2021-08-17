import React, { useState } from "react";
import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "@fontsource/roboto";

import "./App.css";

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

// import { green, orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "White",
    padding: "0 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(event) => setChecked(event.target.checked)}
          inputProps={{ "arial-label": "secondary checkbox" }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6"> MUI Themeing</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={12}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>

            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The Time"
              placeholder="test@test.com"
            />
            <CheckboxExample />
            <ButtonGroup
              size="large"
              style={{ fontSize: 24 }}
              variant="contained"
              color="primary"
            >
              <Button startIcon={<SaveIcon />}>Save</Button>

              <Button startIcon={<DeleteIcon />}>Discard</Button>
            </ButtonGroup>

            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
