import { configureStore, } from "@reduxjs/toolkit";
import CounterReducer from "../redux/Counter/counterslice.js"

export var store = configureStore({
    reducer:{
        Counter:CounterReducer
    }
})