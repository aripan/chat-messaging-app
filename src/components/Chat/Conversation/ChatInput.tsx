import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export interface IChatInputProps {
  drawerWidth: number;
  isSideOpen: boolean;
}
// Define the State interface
interface IChatInputState {
  stateProp1: string;
  stateProp2: number;
}
const ChatInput: React.FunctionComponent<IChatInputProps> = ({
  drawerWidth,
  isSideOpen,
}) => {
  // Declare the state using useState
  const [state, setState] = useState<IChatInputState>({
    stateProp1: "",
    stateProp2: 0,
  });
  // Handle events
  const handleClick = () => {
    // Update the state
    setState({ ...state, stateProp1: "new value" });
  };

  return (
    <TextField
      sx={{
        position: "absolute",
        bottom: 10,
        right: 10,
        width: isSideOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        maxWidth: isSideOpen ? "75vw" : "95vw",
        transition: "width 0.3s ease-in-out, max-width 0.3s ease-in-out",
      }}
      id="filled-multiline-flexible"
      multiline
      maxRows={4}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{
              position: "absolute",
              bottom: 25,
              right: 10,
            }}
          >
            <SendOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default ChatInput;
