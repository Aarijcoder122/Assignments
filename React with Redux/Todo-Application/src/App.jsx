import { useState } from "react"
import "./App.css"
import Todo from "./Components/todo"
import { useDispatch, useSelector } from "react-redux"
import { Addtodo, DeleteTodo, UpdateTodo } from "./redux/todoslice"

function App(){

var [inputvalue,Setinputvalue] = useState("")
var [EditTodo,SetEditTodo] = useState(null)
var [Todoid,SetTodoid] = useState(null)
var tasktodos = useSelector((state) => state.Todo.todos)
var dispatch = useDispatch()
console.log(tasktodos);

var Addfunc = () => {

  if(inputvalue==""){
   return alert("Please Enter a task")
  }

  if(EditTodo!==true){
    dispatch(Addtodo({
    id: new Date().getTime(),
    task:inputvalue
  }))
  }

  else{
    dispatch(UpdateTodo({
    id:Todoid,
    task:inputvalue
  },
  SetEditTodo(null),
  Setinputvalue("")
))}

  Setinputvalue("")
  
}

var Edittodo = (todos) => {
  Setinputvalue(todos.task)
  SetEditTodo(true)
  SetTodoid(todos.id)
}

var DeleteFunc = (todos) => {
  dispatch(DeleteTodo({
    id:todos.id
  }))
}



  return(
    <div className="Todo-Card">
      <h1>Todo Application</h1>

      <input 
      type="text" 
      className="Task-input" 
      placeholder="Enter Your task"  
      onChange={(e) => Setinputvalue(e.target.value)}
      value={inputvalue}
      />
      
      <button className="Submit-button" onClick={Addfunc}>
        {EditTodo ? "Update" : "Add"}
        </button>

      {tasktodos.map((todos) => {
      return(
      <Todo
      task = {todos.task} key={todos.id}
      Editfunc={()=>Edittodo(todos)}
      Deletefunc = {()=>DeleteFunc(todos)}
      />
      )
      })}

      
      
    </div>

  )

}

export default App



