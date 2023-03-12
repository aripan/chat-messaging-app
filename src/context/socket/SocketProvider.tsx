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
  const socket = useSocket(process.env.REACT_APP_WS_BASE!, {
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

    // start listening events
    startListeners();

    // start sending events
    // startSenders();

    // eslint-disable-next-line
  }, []);

  const startListeners = () => {
    console.log("listening events coming from server... 🎧");
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

  const startSenders = () => {
    console.log("sending events to the server...🚀");

    socket.emit(
      "connect-to-server",
      (email: string, uid: string, users: string[]) => {
        console.log("connected to the server", email, uid, users);
        SocketDispatch({ type: "UPDATE_UID", payload: uid });
        SocketDispatch({ type: "MEMBER_JOINED", payload: users });
      }
    );
  };

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};
export default SocketProvider;
