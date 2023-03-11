import { IForgotPasswordActionState, IForgotPasswordInitialState } from "./types"

export const forgotPasswordReducerInitialState: IForgotPasswordInitialState = {
    email: "",
    password: "",
    confirmPassword: "",
    selectedQuestion: undefined,
    answer: "",
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    enableSetPassword: false,
}

export const forgotPasswordReducer = (state: IForgotPasswordInitialState, action: IForgotPasswordActionState) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state, email: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state, password: action.payload
            }
        case 'SET_CONFIRM_PASSWORD':
            return {
                ...state, confirmPassword: action.payload
            }
        case 'SET_SELECTED_QUESTION':
            return {
                ...state, selectedQuestion: action.payload
            }
        case 'SET_ANSWER':
            return {
                ...state, answer: action.payload
            }

        case 'SET_EMAIL_ERROR':
            return {
                ...state, emailError: action.payload
            }
        case 'SET_PASSWORD_ERROR':
            return {
                ...state, passwordError: action.payload
            }
        case 'SET_CONFIRM_PASSWORD_ERROR':
            return {
                ...state, confirmPasswordError: action.payload
            }
        case 'ENABLE_SET_PASSWORD':
            return {
                ...state, enableSetPassword: action.payload
            }
        case 'RESET_STATE':
            return forgotPasswordReducerInitialState
        default:
            return state
    }
}