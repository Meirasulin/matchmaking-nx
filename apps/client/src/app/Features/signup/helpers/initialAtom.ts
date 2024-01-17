import { atom } from 'jotai';
import {
  TypeAtomUserInfo,
  TypeContactInfoMatchmakers,
  TypeMatchmakerInfo,
  TypePersonalDetailsMatchmakers,
} from '../types/userTypes';

export const stepAtom = atom(1);

export const userInfoAtom = atom<undefined | TypeAtomUserInfo>(undefined);
