import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ users: userReducer });

let saved;
try {
  saved = JSON.parse(localStorage.getItem("ff_state"));
} catch (e) {
  saved = undefined;
}

const store = createStore(rootReducer, saved || undefined);
store.subscribe(() =>
  localStorage.setItem("ff_state", JSON.stringify(store.getState()))
);

export default store;
