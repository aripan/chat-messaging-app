import React, { useState } from "react";
// Define the Props interface
export interface IChatInputProps {
  prop1: string;
  prop2: string;
  prop3: string;
}
// Define the State interface
interface IChatInputState {
  stateProp1: string;
  stateProp2: number;
}
const ChatInput: React.FunctionComponent<IChatInputProps> = ({
  prop1,
  prop2,
  prop3,
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
  // Render the component
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{prop2}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default ChatInput;
