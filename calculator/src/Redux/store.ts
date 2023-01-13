import { legacy_createStore } from "redux";
import { reducer } from "./Calc/calc.reducer";

export const store = legacy_createStore(reducer);
