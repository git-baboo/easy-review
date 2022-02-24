import { useCallback } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

import {
  RecoilAtomKeys,
  RecoilPersistenceKeys,
  RecoilSelectorKeys,
} from "@/store/RecoilKeys";

type LoginButtonLoadingState = boolean;

const { persistAtom } = recoilPersist({
  key: RecoilPersistenceKeys.PERSISTED_LOGIN_BUTTON_LOADING,
});

const initialState: LoginButtonLoadingState = false;

const loginButtonLoadingState = atom<boolean>({
  key: RecoilAtomKeys.LOGIN_BUTTON_LOADING_STATE,
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});

type LoginButtonLoadingActions = {
  useUpdateLoginButtonLoading: () => (
    loginButtonLoading: LoginButtonLoadingState
  ) => void;
};

export const loginButtonLoadingActions: LoginButtonLoadingActions = {
  useUpdateLoginButtonLoading: () => {
    const setLoginButtonLoading = useSetRecoilState<LoginButtonLoadingState>(
      loginButtonLoadingState
    );

    return useCallback((loginButtonLoading) => {
      setLoginButtonLoading(loginButtonLoading);
    }, []);
  },
};

type LoginButtonLoadingSelectors = {
  useLoginButtonLoading: () => LoginButtonLoadingState;
};

const loginButtonLoadingSelector = selector<LoginButtonLoadingState>({
  key: RecoilSelectorKeys.LOGIN_BUTTON_LOADING,
  get: ({ get }) => get(loginButtonLoadingState),
});

export const loginButtonLoadingSelectors: LoginButtonLoadingSelectors = {
  useLoginButtonLoading: () =>
    useRecoilValue<LoginButtonLoadingState>(loginButtonLoadingSelector),
};
