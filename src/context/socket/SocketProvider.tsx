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

  const startListeners = () => {};

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};
export default SocketProvider;
