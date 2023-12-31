import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
    todo:todoReducer
})

export const store = configureStore({
    reducer:rootReducer
})

