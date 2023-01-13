import { ActionTypes } from "../../constants/constants";
import * as types from "./calc.actionTypes";

export const addExpression = (number: number): ActionTypes => {
  return { type: types.ADD_EXPRESSION, payload: number.toString() };
};

export const evaluate = (): ActionTypes => {
  return { type: types.EVALUATE };
};

export const reset = (): ActionTypes => {
  return { type: types.RESET };
};
