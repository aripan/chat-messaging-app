type TLoginActions = 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_EMAIL_ERROR' | 'LOGIN_FAILED' | 'RESET_STATE';

type TLoginPayload = any // will change it in the future

export interface ILoginInitialState {
    email: string;
    password: string;
    emailError: boolean,
    isLoginFailed: boolean


}
export interface ILoginActionState {
    type: TLoginActions;
    payload?: TLoginPayload
}