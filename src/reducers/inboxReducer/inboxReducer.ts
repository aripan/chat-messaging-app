import { HIDE_SIDEBAR, OPEN_SIDEBAR } from "./action.types"
import { IActionState, IInitialState } from "./interfaces"

export const inboxReducerInitialState: IInitialState = {
    isSidebarOpen: true
}

export const inboxReducer = (state: IInitialState, action: IActionState) => {
    switch (action.type) {
        case HIDE_SIDEBAR:
            return {
                ...state, isSidebarOpen: action.payload
            }
        case OPEN_SIDEBAR:
            return {
                ...state, isSidebarOpen: action.payload
            }

        default:
            return state
    }
}