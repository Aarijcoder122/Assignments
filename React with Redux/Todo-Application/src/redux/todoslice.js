import { createSlice } from '@reduxjs/toolkit'

var initialState =  {
  todos:[]
}

export var TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {

    Addtodo :(state,action) => {
        state.todos.push(action.payload)
    },

    UpdateTodo:(state,action) => {
      var findTodo = state.todos.find((value) => {
        if(value.id === action.payload.id){
          value.task = action.payload.task
        }
      })
    },

    DeleteTodo:(state,action) => {
     state.todos =  state.todos.filter((value) =>{
      return value.id !== action.payload.id
      })
    }

  }
})

export var { Addtodo , UpdateTodo , DeleteTodo } = TodoSlice.actions

export default TodoSlice.reducer

