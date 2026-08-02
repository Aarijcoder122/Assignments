var nameinput = document.getElementById("nameinput")
var emailinput = document.getElementById("emailinput")
var passwordinput = document.getElementById("passwordinput")
var submitbutton = document.getElementById("Sumbitbutton")

var formvalidation = () =>{

try {

    if(!nameinput.value){
      throw "Please enter a name"
    }

    if(!emailinput.value){
        throw "Please enter email"
    }

    if(!emailinput.value.includes("@")){
        throw "Please use @ in your email"
    }

    if(!passwordinput.value){
        throw "Please enter password" 
    }

    if(passwordinput.value.length < 8) {
        throw "Password length should be 8 charcaters"
    } 

    form()


} catch (error) {
    alert(error)
}

}


var form = () => {
    alert("Form submitted")
}





submitbutton.onclick = formvalidation;
