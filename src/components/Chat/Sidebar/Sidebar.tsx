import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Autocomplete, Box, List, TextField, Typography } from "@mui/material";
import React from "react";
import {
  HIDE_SIDEBAR,
  OPEN_SIDEBAR,
} from "../../../reducers/inboxReducer/action.types";
import { IActionState } from "../../../reducers/inboxReducer/interfaces";
import { users } from "../../../utilities/Users";
import UserListItem from "./UserListItem";
// Define the Props interface
export interface ISidebarProps {
  isSidebarOpen: boolean;
  dispatchToToggleSidebar: React.Dispatch<IActionState>;
}
// Define the State interface
interface ISidebarState {}
const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  isSidebarOpen,
  dispatchToToggleSidebar,
}) => {
  // Handle events
  // const handleClick = () => {
  //   // Update the state
  //   setState({ ...state, stateProp1: "new value" });
  // };
  // Render the component
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: 0.5,
        // border: "2px solid red",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {isSidebarOpen ? (
          <>
            <Typography component={"h2"} variant={"h5"} sx={{ marginLeft: 1 }}>
              {" "}
              Chats
            </Typography>
            <ChevronLeftOutlinedIcon
              fontSize="large"
              sx={{
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              onClick={() => {
                dispatchToToggleSidebar({ type: HIDE_SIDEBAR, payload: false });
              }}
            />
          </>
        ) : (
          <ChevronRightOutlinedIcon
            fontSize="large"
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
            onClick={() => {
              dispatchToToggleSidebar({ type: OPEN_SIDEBAR, payload: true });
            }}
          />
        )}
      </Box>

      <Box>
        {isSidebarOpen ? (
          <>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={users.map((user) => user.name)}
              renderInput={(params) => (
                <TextField {...params} label="search users..." />
              )}
              sx={{
                margin: 1,
              }}
            />
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                maxHeight: "70vh",
                overflowX: "hidden",
                overflowY: "auto",
                bgcolor: "background.paper",
                mb: 2,
              }}
            >
              {" "}
              {users.map((user) => (
                <UserListItem user={user} key={user.email} />
              ))}
            </List>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
export default Sidebar;
