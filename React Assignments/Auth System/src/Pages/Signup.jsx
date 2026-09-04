import { useState } from "react"
import Input from "../Components/Input"
import { Link } from "react-router-dom"

var Signup = () => {

    var [form,Setform] = useState({
        name:"",
        email:"",
        age:"",
        password:""
    })

    var namevalue = (value) => {
        Setform({
           ...form,
           name:value
    })}

    var emailvalue = (value) => {
        Setform({
           ...form,
           email:value
    })}

    var agevalue = (value) => {
        Setform({
           ...form,
           age:value
    })}

    var passwordvalue = (value) => {
        Setform({
           ...form,
           password:value
    })}

    var [output,Setoutput] = useState(false)

    var out = false

    var getvaluefunc = () => {

        if(form.name.trim()==""){
            alert("Please Enter a name")
            return
        }

        if(form.email.trim()==""){
            alert("Please Enter Email")
            return
        }

        if(!form.email.includes("@")){
            alert("Please use @ in your email")
            return
        }

        if(form.age.trim()==""){
            alert("Please Enter age")
            return
        }

        if(form.password.trim()==""){
            alert("Please Enter a Password")
            return
        }

        if(form.password.length<8){
            alert("Password should be 8 characters long")
            return
        }

        Setoutput(true)

    }

    var values = "" 

    if(output==true ) {

     values= (  <div >
         <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
        <p>Age: {form.age}</p>
        <p>Password: {form.password}</p> 
        </div> ) 
    }


return(
    <>
    <div className="signup-box">

        <h1>Signup</h1>

        <div className="nameinput">
        <Input type={"text"} placeholder={"Enter your Name"} func={namevalue} />
        </div>

        <div className="emailinput">
        <Input type={"email"} placeholder={"Enter your Email"} func={emailvalue} />
        </div>

        <div className="ageinput">
        <Input type={"number"} placeholder={"Enter your Age"} func={agevalue} />
        </div>

        <div className="passwordinput">
        <Input type={"password"} placeholder={"Enter your Password"} func={passwordvalue} />
        </div>

        <Link to={"/"}>
        <button >Go Back</button>
        </Link>

        <button onClick={getvaluefunc} >Get value</button>

        {values}

    </div>
    </>
)    

}

export default Signup