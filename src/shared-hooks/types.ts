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
export interface IUserFromDB {
    _id: string;
    name: string;
    email: string;
    selectedQuestion: string;
    answer: string;
}