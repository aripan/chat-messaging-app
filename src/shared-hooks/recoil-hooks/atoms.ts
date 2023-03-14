import { atom } from "recoil";
import { IUserFromDB } from "../types";

export const aSelectedUser = atom<IUserFromDB>({
    key: 'aSelectedUser',
    default: {
        _id: '',
        name: '',
        email: '',
        selectedQuestion: '',
        answer: ''
    },
});

export const aCurrentUser = atom<IUserFromDB>({key: 'aCurrentUser',
default: {
    _id: '',
    name: '',
    email: '',
    selectedQuestion: '',
    answer: ''
}})