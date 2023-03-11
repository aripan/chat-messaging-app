import { ISecurityQuestionProps } from "../../utilities/SecurityQuestions/SecurityQuestions";


type TForgotPasswordActions = 'SET_EMAIL' | 'SET_SELECTED_QUESTION' | 'SET_ANSWER' | 'SET_EMAIL_ERROR'

type TForgotPasswordPayload = any // will change it in the future

export interface IForgotPasswordInitialState {
    email: string;
    selectedQuestion: ISecurityQuestionProps | undefined;
    answer: string;
    emailError: boolean,
}

export interface IForgotPasswordActionState {
    type: TForgotPasswordActions;
    payload?: TForgotPasswordPayload
}


