import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import React, { useReducer } from "react";
import {
  inboxReducer,
  inboxReducerInitialState,
} from "../../reducers/inboxReducer/inboxReducer";
import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";
// Define the Props interface
export interface IInboxProps {}
// Define the State interface

const Inbox: React.FunctionComponent<IInboxProps> = () => {
  const [state, dispatch] = useReducer(inboxReducer, inboxReducerInitialState);

  // const handleClick = () => {
  //   // Update the state
  //   setState({ ...state, stateProp1: "new value" });
  // };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          marginTop: 5,
          //   border: "2px solid red",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            // border: "2px solid red",
          }}
        >
          {state.isSidebarOpen ? (
            <Grid container>
              <Grid
                item
                xs={12}
                sm={4}
                lg={3}
                sx={{
                  height: "90vh",
                  border: "2px solid green",
                }}
              >
                <Sidebar
                  isSidebarOpen={state.isSidebarOpen}
                  dispatchToToggleSidebar={dispatch}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                lg={9}
                sx={{
                  height: "90vh",
                  border: "2px solid black",
                }}
              >
                <Conversation />
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              <Grid
                item
                xs={0.5}
                sx={{
                  height: "90vh",
                  border: "2px solid green",
                  pr: 0.5,
                }}
              >
                <Sidebar
                  isSidebarOpen={state.isSidebarOpen}
                  dispatchToToggleSidebar={dispatch}
                />
              </Grid>
              <Grid
                item
                xs={11.5}
                sx={{
                  height: "90vh",
                  border: "2px solid black",
                }}
              >
                <Conversation />
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Inbox;
