/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapValues, uniqueId } from 'lodash';
import { useCallback, useReducer } from 'react';

import Widget from '@/components/review/Widget';

const useWidgets = (reviewer: any) => {
  const [widgetsData, dispatch] = useReducer((state: any, action: any) => {
    const previous = state[action?.payload?.key] ?? {};
    switch (action.type) {
      case 'add':
        return {
          ...state,
          [action.payload.key]: {
            id: uniqueId('widget-'),
            draft: '',
            path: action.payload.path,
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
                author: reviewer.userName,
                avatarUrl: reviewer.avatarUrl,
                path: previous.path,
                body: previous.draft,
              },
            ],
          },
        };
      default:
        return state;
    }
  }, {});

  const addWidget = useCallback(
    (key, path) => dispatch({ type: 'add', payload: { key, path } }),
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
