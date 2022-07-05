import { createContext, useReducer } from 'react';
import reducer from './Reducer';

export const Context = createContext();

const initialState = {
  wishing: '',
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
}