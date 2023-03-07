import React, { useState } from "react";
// Define the Props interface
export interface IChatMessagesProps {
  prop1: string;
  prop2: string;
  prop3: string;
}
// Define the State interface
interface IChatMessagesState {
  stateProp1: string;
  stateProp2: number;
}
const ChatMessages: React.FunctionComponent<IChatMessagesProps> = ({
  prop1,
  prop2,
  prop3,
}) => {
  // Declare the state using useState
  const [state, setState] = useState<IChatMessagesState>({
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
      <h1>{prop1}</h1>
      <p>{prop2}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ChatMessages;
