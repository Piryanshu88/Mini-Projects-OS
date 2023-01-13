import { ActionTypes, InitialState } from "../../constants/constants";
import * as types from "./calc.actionTypes";

const initialState: InitialState = {
  expression: "",
};

export const reducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case types.ADD_EXPRESSION:
      return { ...state, expression: (state.expression += payload) };

    case types.EVALUATE:
      return { ...state, expression: eval(state.expression) };

    case types.RESET:
      return { ...state, expression: "" };
    default:
      return state;
  }
};
