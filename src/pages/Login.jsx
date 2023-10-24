import React, { useState } from "react";
import InputField from "../component/LoginComponent/InputField";
import Loginimg1 from "../../src/assets/images/Loginimg1.png"
import Loginimg2 from "../../src/assets/images/Loginimg2.png"

function Login() {
    
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")
   
  const handleUsername = (e)=>{
    setUsername(e.target.value)
    
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = ()=>{
    
  }

  const obj = [
    {name:"Username",handleFunction:handleUsername},
    {name:"Password",handleFunction:handlePassword}
  ]

  return (
    <div className="overflow-hidden relative min-h-screen background-gradiant flex justify-center items-center ">
      <div className="absolute md:top-[-10rem] top-[-20rem] right-[-10rem]  w-[35rem]">
      <img src={Loginimg1} />
      </div>
      <div className="absolute md:bottom-[-10rem] md:left-[-10rem]  md:w-[30rem] bottom-[-20rem] left-[-10rem]">
   <img src={Loginimg2} />
      </div>

    <div className="body w-96 h-fit justify-center flex flex-col gap-10 items-center ">
       <div className="text-white">
        <h1 className="text-4xl">Login</h1>
       </div>
       <div className="flex flex-col gap-16">
       <div className=" flex flex-col gap-6">
        {obj.map((item,index)=>(
          <InputField key={index} value={item.name} handleFunction={item.handleFunction}  />
        ))}
       </div>
       <div className="hover:cursor-pointer w-[22.5rem] flex items-center justify-center h-fit py-2 bg-violet">
          <h1 className="text-white text-lg" onClick={handleSubmit}>Login</h1>
       </div>
       </div>
    </div>

    </div>
  );
}

export default Login;
