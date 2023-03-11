import { ILoginActionState, ILoginInitialState } from "./types"

export const loginReducerInitialState: ILoginInitialState = {
    email: "",
    password: "",
    emailError: false,
    isLoginFailed: false
}

export const loginReducer = (state: ILoginInitialState, action: ILoginActionState) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state, email: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state, password: action.payload
            }
        case 'SET_EMAIL_ERROR':
            return {
                ...state, emailError: action.payload
            }
        case 'LOGIN_FAILED':
            return {
                ...state, isLoginFailed: action.payload
            }
        case 'RESET_STATE':
            return loginReducerInitialState
        default:
            return state
    }
}