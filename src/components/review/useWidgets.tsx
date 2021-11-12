/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapValues, uniqueId } from 'lodash';
import { useCallback, useReducer } from 'react';

import Widget from '@/components/review/Widget';

type Props = {
  userName: string;
  avatarUrl: string;
};

const useWidgets = ({ userName, avatarUrl }: Props) => {
  type StateType = {
    id: string;
    path: string;
    draft: string;
    comments:
      | {
          id: string;
          author: string;
          avatarUrl: string;
          path: string;
          body: string;
        }[]
      | [];
  };

  type ActionType =
    | {
        type: 'add';
        payload: { key: number; path: string; body: string };
      }
    | {
        type: 'input';
        payload: { key: number; body: string };
      }
    | {
        type: 'submit';
        payload: { key: number; body: string };
      };

  const [widgetsData, dispatch] = useReducer((state: StateType[], action: ActionType) => {
    const previous = state[action.payload.key] ?? {};
    switch (action.type) {
      case 'add':
        return {
          ...state,
          [action.payload.key]: {
            id: uniqueId('widget-'),
            path: action.payload.path,
            draft: action.payload.body,
            comments: [],
          },
        };
      case 'input':
        return {
          ...state,
          [action.payload.key]: {
            ...previous,
            draft: action.payload.body,
          },
        };
      case 'submit':
        return {
          ...state,
          [action.payload.key]: {
            ...previous,
            draft: '',
            comments: [
              ...previous.comments,
              {
                id: uniqueId('comment-'),
                author: userName,
                avatarUrl: avatarUrl,
                path: previous.path,
                body: previous.draft,
              },
            ],
          },
        };
      default:
        return state;
    }
  }, []);

  const addWidget = useCallback(
    (key, path, body) => dispatch({ type: 'add', payload: { key, path, body } }),
    []
  );

  const writeComment = useCallback(
    (key, body) => dispatch({ type: 'input', payload: { key, body } }),
    []
  );

  const submitComment = useCallback(
    (key, body) => dispatch({ type: 'submit', payload: { key, body } }),
    []
  );

  const renderWidget = (data: any, key: any) => (
    <Widget changeKey={key} {...data} onDraftChange={writeComment} onSubmit={submitComment} />
  );

  return [mapValues(widgetsData, renderWidget), { addWidget, submitComment }];
};

export default useWidgets;
