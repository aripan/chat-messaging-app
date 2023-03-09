import { createContext } from "react";
import { ISocketActionState, ISocketInitialState } from "../../reducers/socket/interface";

export interface ISocketContextProps {
    SocketState: ISocketInitialState;
    SocketDispatch: React.Dispatch<ISocketActionState>;
}

export const defaultSocketContextState: ISocketInitialState = {
    socket: undefined,
    users: []
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => { },
})

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;