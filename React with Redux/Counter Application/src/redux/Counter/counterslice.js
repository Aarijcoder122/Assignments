import { createSlice } from "@reduxjs/toolkit"

var initialState = {
    value:0,
}

var counterslice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        Increement: (state) => {
            state.value += 1
        },
        Decremeent: (state) => {
            state.value -= 1
        },
        Reset: (state) => {
            state.value = 0
        }
    }
})

export  var {Increement,Decremeent,Reset} = counterslice.actions
export default counterslice.reducer