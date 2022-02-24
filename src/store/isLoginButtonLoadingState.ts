import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "persistedIsLoginButtonLoadingState",
});

const initialState: boolean = false;

export const isLoginButtonLoadingState = atom<boolean>({
  key: "isLoginButtonLoadingState",
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});
