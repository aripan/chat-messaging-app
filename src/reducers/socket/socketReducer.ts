import { Socket } from "socket.io-client"
import { ISocketActionState, ISocketInitialState } from "./types"


export const socketReducer = (state: ISocketInitialState, action: ISocketActionState) => {
    console.log("🚀 ~ file: socketReducer.ts:5 ~ socketReducer ~ state:", state, action)
    switch (action.type) {
        case "UPDATE_SOCKET":
            return {
                ...state, socket: action.payload as Socket
            }
        case "UPDATE_UID":
            return {
                ...state, uid: action.payload as string
            }
        case 'MEMBER_JOINED':

            if (typeof action.payload !== 'object' || action.payload === null || !('email' in action.payload) || !('users' in action.payload)) {
                return state;
              }
            const { email, users } = action.payload;


            return {
                ...state, email:email , users: users
            }
        case 'MEMBER_LEFT':
            return {
                ...state, users: action.payload as string[]
            }
        default:
            return state
    }
}