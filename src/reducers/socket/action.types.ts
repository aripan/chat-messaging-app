import { Socket } from "socket.io-client"

export type TSocketActions = 'UPDATE_SOCKET'| 'MEMBER_JOINED' | 'MEMBER_LEFT'

// It depends on the IInitialState. Whatever are available in the IInitialState, will be returned here as well.
export type TSocketPayload = string[] | Socket