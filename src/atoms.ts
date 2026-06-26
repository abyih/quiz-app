import { atom } from "jotai";

export const currentQuizAtom = atom<number>(0);
export const quizOverAtom = atom<boolean>(false);
export const answeredQuizsAtom = atom<number>(0);
