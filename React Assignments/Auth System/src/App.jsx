import { useState } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import UserDetailPage from "./Pages/Userdetailpage";

function App() {

return(

 <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} ></Route>
      <Route path="/Home/:id" element={<UserDetailPage />}></Route>
   </Routes>
 </BrowserRouter>


)

}

export default App