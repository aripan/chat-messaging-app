import { ISecurityQuestionProps } from "../../utilities/SecurityQuestions/SecurityQuestions";

type TRegisterActions = 'SET_NAME' | 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_CONFIRM_PASSWORD' | 'SET_SELECTED_QUESTION' | 'SET_ANSWER' | 'SET_EMAIL_ERROR' | 'SET_PASSWORD_ERROR' | 'SET_CONFIRM_PASSWORD_ERROR' | 'RESET_STATE'

type TRegisterPayload = any // will change it in the future

export interface IRegisterInitialState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    selectedQuestion: ISecurityQuestionProps | undefined;
    answer: string;
    emailError: boolean,
    passwordError: boolean,
    confirmPasswordError: boolean,

}

export interface IRegisterActionState {
    type: TRegisterActions;
    payload?: TRegisterPayload
}


