var Sumbitbutton = document.getElementById("Sumbit-button")
var text = document.getElementById("text")
var taskinput = document.getElementById("task-input")
var editbutton = document.getElementById("editbutton")
var deletebutton = document.getElementById("deletebutton")
var Taskbox = document.getElementById("Taskbox")

Sumbitbutton.onclick = function () {

    if(!taskinput.value){
        alert("Please Enter a task")
        return
    }

    var box = document.createElement("div")
    box.className = "Taskbox"
    box.style.backgroundColor = "white"

    var p = document.createElement("p")
    p.className = "text"
    p.innerHTML = taskinput.value

    var editbutton = document.createElement("button")
    editbutton.className = "editbutton"
    editbutton.innerHTML = "Edit"

    var deletebutton = document.createElement("button")
    deletebutton.className = "deletebutton"
    deletebutton.innerHTML = "Delete"

    box.appendChild(p)
    box.appendChild(editbutton)
    box.appendChild(deletebutton)
    Taskbox.appendChild(box)

    deletebutton.onclick = function () {
        box.remove()
    }

    editbutton.onclick = function () {
        var usernewtext = prompt ("Edit your text",taskinput.value)
        p.innerHTML = usernewtext
    }

    taskinput.value = ""

}

