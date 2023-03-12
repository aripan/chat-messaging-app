import { Socket } from "socket.io-client"
import { ISocketActionState, ISocketInitialState } from "./types"


export const socketReducer = (state: ISocketInitialState, action: ISocketActionState) => {
    console.log("🚀 ~ file: socketReducer.ts:5 ~ socketReducer ~ state:", state, action)
    switch (action.type) {
        case "UPDATE_SOCKET":
            return {
                ...state, socket: action.payload as Socket
            }
        case 'MEMBER_JOINED':
            return {
                ...state, users: action.payload,
            }
        case 'MEMBER_LEFT':
            return {
                ...state, users: action.payload
            }
        default:
            return state
    }
}