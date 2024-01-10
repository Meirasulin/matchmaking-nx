import { atom } from "jotai";
import { TypeUserInfo, TypeContactInfo, TypePersonalDetails } from "../types/userInfoType";

export const stepAtom = atom(1)

export const userInfoAtom = atom<null | TypeUserInfo | TypeContactInfo | TypePersonalDetails>(null)