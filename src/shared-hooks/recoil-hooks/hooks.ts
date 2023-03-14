import { useRecoilState } from "recoil"
import { aCurrentUser, aSelectedUser } from "./atoms"

export const useSelectedUser = () => {
    return useRecoilState(aSelectedUser)
}

export const useCurrentUser = () => {
    return useRecoilState(aCurrentUser)
}
