import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoslice.js";

export var store = configureStore({
    reducer:{
        Todo:TodoReducer
    }
})