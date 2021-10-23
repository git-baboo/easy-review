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
            comments: [],
          },
        };
      case 'input':
        return {
          ...state,
          [action.payload.key]: {
            ...previous,
            draft: action.payload.content,
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
                content: previous.draft,
                time: Date.now(),
              },
            ],
          },
        };
      default:
        return state;
    }
  }, {});

  const addWidget = useCallback((key) => dispatch({ type: 'add', payload: { key } }), []);

  const writeComment = useCallback(
    (key, content) => dispatch({ type: 'input', payload: { key, content } }),
    []
  );

  const submitComment = useCallback(
    (key, content) => dispatch({ type: 'submit', payload: { key, content } }),
    []
  );

  const renderWidget = (data: any, key: any) => (
    <Widget changeKey={key} {...data} onDraftChange={writeComment} onSubmit={submitComment} />
  );

  return [mapValues(widgetsData, renderWidget), { addWidget, submitComment }];
};

export default useWidgets;
