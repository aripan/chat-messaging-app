import React, { PropsWithChildren, useEffect, useReducer } from "react";
import { socketReducer } from "../../reducers/socket/socketReducer";
import { useSocket } from "../../shared-hooks/useSocket";
import {
  defaultSocketContextState,
  SocketContextProvider,
} from "./SocketContext";
// Define the Props interface
export interface ISocketProviderProps extends PropsWithChildren {}

const SocketProvider: React.FunctionComponent<ISocketProviderProps> = ({
  children,
}) => {
  const socket = useSocket("ws://localhost:8080", {
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    autoConnect: false,
  });

  const [SocketState, SocketDispatch] = useReducer(
    socketReducer,
    defaultSocketContextState
  );

  useEffect(() => {
    // connect to the websocket
    socket.connect();

    // save the socket in the context
    SocketDispatch({ type: "UPDATE_SOCKET", payload: socket });

    // start listening for messages
    startListeners();

    // eslint-disable-next-line
  }, []);

  const startListeners = () => {
    // reconnect event
    socket.io.on("reconnect", (attempt) => {
      console.log("Reconnected on attempt: ", attempt);
    });

    // reconnect attempt event
    socket.io.on("reconnect_attempt", (attempt) => {
      console.log("Reconnection attempt: ", attempt);
    });

    // reconnect error
    socket.io.on("reconnect_error", (error) => {
      console.log("Reconnection error: ", error);
    });

    // reconnection failed
    socket.io.on("reconnect_failed", () => {
      console.log("Reconnection failure");
      alert("We are unable to connect to the websocket. Please try again.");
    });
  };

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};
export default SocketProvider;
