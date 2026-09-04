import { useState , useEffect } from "react";
import Input from "../Components/Input";
import { Link , useNavigate  } from "react-router-dom";

var Login = () => {

    var [form,Setform] = useState({
    email:"",
    password:""
  })
  
  var emailvalue = (value) => {
    console.log("Mera func chala => ", value);
    Setform(
      {
        ...form,
        email:value
      }
    )
  }

  var Passwordvalue = (value) => {
    console.log("Mera func chala => ", value);
    Setform({
      ...form,
      password:value
    })
  }

  
    var nagivate = useNavigate()

  var loginfunc = () => {

    if(form.email.trim()==""){
      alert("Please enter a Email")
      return
    }

    if(!form.email.includes("@")){
      alert("Please use @ in your email")
      return
    }

    if(form.password.trim()==""){
      alert("Please enter a Password")
      return
    }

    if(form.password.length<8){
      alert("Form should be 8 characters long")
      return
    }

    nagivate("./Home")

  }

  useEffect(()=>{
    console.log("Hello")
  })


  return(
    <>

    <div className="login-box">

      <h1>Login</h1>

    <div className="email-input">
    <Input
    placeholder={"Enter your Email"}
    type={"email"}
    func={emailvalue}
     />
    </div>

    <div className="Password-input">
    <Input
    placeholder={"Enter your Password"}
    type={"Password"}
    func={Passwordvalue}
    />
    </div>

    <button onClick={loginfunc}>Login</button>

    <Link to={"./Signup"}>
    <p className="text">Don't have an account Click here?</p>
    </Link>


     </div>

    </>

  )

}

export default Login