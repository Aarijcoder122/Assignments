import { useState } from "react"
import "./App.css"
import Todo from "./Components/Todo"

function App(){

  var [inputvalue,Setinputvalue] = useState("")
  var [task,Settask] = useState([])

  var Submitfunc = () => {
  
    if(inputvalue == ""){
      alert("Please write a Task")
      return
    }

    Settask([...task,inputvalue])
    Setinputvalue("") 


  }  

  var Editfunction = (index) => {
  var Editpropmt = prompt("Edit Your Value",task[index])   
  var edittask = [...task]
  edittask[index] = Editpropmt
  Settask(edittask)
}

  var Deletefunction = (index) => {
    var newtask = task.filter((value,i) => {
      if(i==index){
        return false     
      }else{
        return true
      }       
    })

    Settask(newtask)
  }

  return(
    <div className="Todo-Card">
      <h1>Todo Application</h1>

      <input 
      type="text" 
      className="Task-input" 
      placeholder="Enter Your task" 
      onChange={(e) => {Setinputvalue(e.target.value)}} 
      value={inputvalue} 
      />
      
      <button className="Submit-button" onClick={Submitfunc}  >Submint</button>

      {task.map((value,index) => {
       return(
         <Todo 

        task={value}
        key={index}
        Editfunc = {() => Editfunction(index)}
        Deletefunc = {() => Deletefunction(index)}
        
        />
       )
      })}
      
    </div>

  )

}

export default App





