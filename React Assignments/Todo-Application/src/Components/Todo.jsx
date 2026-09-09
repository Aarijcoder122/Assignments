var Todo = (props) => {
     return(
    <div className="todo">
      <p>{props.task}</p>
      <button className="Editbutton" onClick={props.Editfunc} >Edit</button>
      <button className="Deletebutton" onClick={props.Deletefunc} >Delete</button>
    </div>
     )
}

export default Todo

