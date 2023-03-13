import { Socket } from "socket.io-client";

export type TSocketActions = 'UPDATE_SOCKET' | 'MEMBER_JOINED' | 'MEMBER_LEFT'

// It depends on the IInitialState. Whatever are available in the IInitialState, will be returned here as well.
interface IUser {
    email: string;
    users: string[];
}
export type TSocketPayload = any;
// export type TSocketPayload = string | string[] | Socket | IUser;


export interface ISocketInitialState {
    socket: Socket | undefined;
    email: string;
    uid: string;
    users: any[];

    // will be added more in the future...🚖
}
export interface ISocketActionState {
    type: TSocketActions;
    payload?: TSocketPayload;
}