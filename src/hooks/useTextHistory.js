import { useReducer } from 'react';

// Reducer for managing text state history
const textHistoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        present: action.payload,
        past: [...state.past, state.present],
        future: []
      };
    case 'UNDO':
      if (state.past.length === 0) return state;
      return {
        past: state.past.slice(0, -1),
        present: state.past[state.past.length - 1],
        future: [state.present, ...state.future]
      };
    case 'REDO':
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],
        present: state.future[0],
        future: state.future.slice(1)
      };
    default:
      return state;
  }
};

export const useTextHistory = (initialText = 'Your Text Here') => {
  const [textState, dispatch] = useReducer(textHistoryReducer, {
    past: [],
    present: initialText,
    future: []
  });

  return {
    text: textState.present,
    setText: (newText) => dispatch({ type: 'SET_TEXT', payload: newText }),
    undo: () => dispatch({ type: 'UNDO' }),
    redo: () => dispatch({ type: 'REDO' }),
    canUndo: textState.past.length > 0,
    canRedo: textState.future.length > 0
  };
};