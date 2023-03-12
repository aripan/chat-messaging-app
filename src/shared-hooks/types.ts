export interface IUserInfo {
    email: string;
    name: string;
    uid: string | undefined;
}

export interface IUseGetUserInfo {
    userInfo: {
        email: string;
        name: string;
        uid: string;
    },
    error: any
}