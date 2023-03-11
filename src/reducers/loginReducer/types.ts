type TLoginActions = 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_EMAIL_ERROR' | 'RESET_STATE';

type TLoginPayload = any // will change it in the future

export interface ILoginInitialState {
    email: string;
    password: string;
    emailError: boolean,


}
export interface ILoginActionState {
    type: TLoginActions;
    payload?: TLoginPayload
}