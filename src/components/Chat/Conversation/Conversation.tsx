import { Box } from "@mui/material";
import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
// Define the Props interface
export interface IConversationProps {
  drawerWidth: number;
  isSideOpen: boolean;
}
// Define the State interface
interface IConversationState {
  stateProp1: string;
  stateProp2: number;
}
const Conversation: React.FunctionComponent<IConversationProps> = ({
  drawerWidth,
  isSideOpen,
}) => {
  // Declare the state using useState
  const [state, setState] = useState<IConversationState>({
    stateProp1: "",
    stateProp2: 0,
  });
  // Handle events
  const handleClick = () => {
    // Update the state
    setState({ ...state, stateProp1: "new value" });
  };
  // Render the component
  return (
    <Box>
      <ChatMessages />
      <ChatInput drawerWidth={drawerWidth} isSideOpen={isSideOpen} />
    </Box>
  );
};
export default Conversation;
