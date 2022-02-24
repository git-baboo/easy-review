import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persistedLoginButtonState",
});

const initialState: boolean = false;

export const loginButtonState = atom<boolean>({
  key: "loginButtonState",
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
