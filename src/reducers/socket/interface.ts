import { Socket } from "socket.io-client";
import { TSocketActions, TSocketPayload } from "./action.types";

export interface ISocketInitialState {
    socket: Socket | undefined;
    users: string[];

    // will be added more in the future...🚖
}
export interface ISocketActionState {
    type: TSocketActions;
    payload?: TSocketPayload;
}