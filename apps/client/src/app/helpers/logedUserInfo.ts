import { atom } from "jotai";
import { userInfoTodisplayType } from "../Features/initMatch/types/userIfnoToDisplay";

export const logedUserInfo = atom<undefined | userInfoTodisplayType>(undefined)