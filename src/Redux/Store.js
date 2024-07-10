import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";
import { thunk } from "redux-thunk";

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
