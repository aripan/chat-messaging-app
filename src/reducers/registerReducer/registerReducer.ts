import { IRegisterActionState, IRegisterInitialState } from "./types"

export const registerReducerInitialState: IRegisterInitialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedQuestion: undefined,
    answer: "",
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
}

export const registerReducer = (state: IRegisterInitialState, action: IRegisterActionState) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state, name: action.payload
            }
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
        case 'RESET_STATE':
            return registerReducerInitialState
        default:
            return state
    }
}