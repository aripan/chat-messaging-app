import React, { useState } from "react";
// Define the Props interface
export interface IConversationProps {}
// Define the State interface
interface IConversationState {
  stateProp1: string;
  stateProp2: number;
}
const Conversation: React.FunctionComponent<IConversationProps> = ({}) => {
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
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Conversation;
