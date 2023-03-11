import { ISecurityQuestionProps } from "../../utilities/SecurityQuestions/SecurityQuestions";


type TForgotPasswordActions = 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_CONFIRM_PASSWORD' | 'SET_SELECTED_QUESTION' | 'SET_ANSWER' | 'SET_EMAIL_ERROR' | 'SET_PASSWORD_ERROR' | 'SET_CONFIRM_PASSWORD_ERROR' | 'ENABLE_SET_PASSWORD' | 'RESET_STATE'

type TForgotPasswordPayload = any // will change it in the future

export interface IForgotPasswordInitialState {
    email: string;
    password: string;
    confirmPassword: string;
    selectedQuestion: ISecurityQuestionProps | undefined;
    answer: string;
    emailError: boolean,
    passwordError: boolean,
    enableSetPassword: boolean,
    confirmPasswordError: boolean,

}

export interface IForgotPasswordActionState {
    type: TForgotPasswordActions;
    payload?: TForgotPasswordPayload
}


