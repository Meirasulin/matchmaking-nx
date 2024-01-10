import { atom } from "jotai";
import { TypeUserInfo, TypeContactInfo, TypePersonalDetails, TypeMatchInfo, TypeJobAndEdu } from "../types/userTypes";

export const stepAtom = atom(1)

export const userInfoAtom = atom<null  |TypeJobAndEdu | TypeUserInfo | TypeContactInfo | TypePersonalDetails | TypeMatchInfo>(null)