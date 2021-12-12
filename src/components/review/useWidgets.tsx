import { mapValues } from "lodash";
import { useCallback, useReducer } from "react";

import Widget from "@/components/review/Widget";
import { PreviewCommentType } from "@/types/PreviewCommentType";

type Props = {
  userName: string;
  avatarUrl: string;
};

const useWidgets = ({ userName, avatarUrl }: Props) => {
  type StateType = {
    [fileId: string]: {
      [changeKey: string]: {
        isWriting: boolean;
        draft: PreviewCommentType;
        comments: PreviewCommentType[];
      };
    };
  };

  type ActionType =
    | {
        type: "add";
        payload: {
          fileId: string;
          changeKey: string;
          path: string;
          body: string;
        };
      }
    | {
        type: "input";
        payload: {
          fileId: string;
          changeKey: string;
          body: string;
        };
      }
    | {
        type: "submit";
        payload: {
          fileId: string;
          changeKey: string;
        };
      };

  const [widgetsData, dispatch] = useReducer(
    (state: StateType, action: ActionType): StateType => {
      const previousChangeKeys = state[action.payload.fileId] ?? {};
      const previousComments =
        previousChangeKeys[action.payload.changeKey] ?? {};
      switch (action.type) {
        case "add":
          return {
            ...state,
            [action.payload.fileId]: {
              ...previousChangeKeys,
              [action.payload.changeKey]: {
                isWriting: true,
                draft: {
                  path: action.payload.path,
                  body: action.payload.body,
                },
                comments: previousComments.comments ?? [],
              },
            },
          };
        case "input":
          return {
            ...state,
            [action.payload.fileId]: {
              ...previousChangeKeys,
              [action.payload.changeKey]: {
                isWriting: true,
                draft: {
                  path: previousComments.draft.path,
                  body: action.payload.body,
                },
                comments: previousComments.comments,
              },
            },
          };
        case "submit":
          return {
            ...state,
            [action.payload.fileId]: {
              ...previousChangeKeys,
              [action.payload.changeKey]: {
                isWriting: false,
                draft: {
                  path: "",
                  body: "",
                },
                comments: [
                  ...previousComments.comments,
                  previousComments.draft,
                ],
              },
            },
          };
        default:
          return state;
      }
    },
    {}
  );

  const addWidget = useCallback(
    (fileId, changeKey, path, body) =>
      dispatch({ type: "add", payload: { fileId, changeKey, path, body } }),
    []
  );

  const writeComment = useCallback(
    (fileId, changeKey, body) =>
      dispatch({ type: "input", payload: { fileId, changeKey, body } }),
    []
  );

  const submitComment = useCallback(
    (fileId, changeKey) =>
      dispatch({ type: "submit", payload: { fileId, changeKey } }),
    []
  );

  const renderWidgetDict = (widgetsData: any) => {
    return mapValues(widgetsData, (fileIdDict: any, fileId: string) => {
      return mapValues(fileIdDict, (changeKeyDict: any, changeKey: string) => (
        <Widget
          fileId={fileId}
          changeKey={changeKey}
          author={userName}
          avatarUrl={avatarUrl}
          isWriting={changeKeyDict.isWriting}
          comments={changeKeyDict.comments}
          draft={changeKeyDict.draft}
          onDraftChange={writeComment}
          onSubmit={submitComment}
        />
      ));
    });
  };

  return [renderWidgetDict(widgetsData), addWidget];
};

export default useWidgets;
