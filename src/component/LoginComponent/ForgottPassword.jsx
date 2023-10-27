import React from 'react'
import Loginimg1 from "../../src/assets/images/Loginimg1.png"
import Loginimg2 from "../../src/assets/images/Loginimg2.png"

const ForgottPassword = () => {
  return (
    <div className="body w-96 h-fit justify-center flex flex-col gap-10 items-center ">
    <div className="text-white">
     <h1 className="text-4xl font-ubuntu ">Sky Stream</h1>
    </div>
    <div className="flex flex-col gap-16">
    <div className=" flex flex-col gap-6">
    <div className="form__group field ">
<input type="email" className="form__field invalid:border-red-500 "  placeholder="Name" id="email"  required onChange={handleChange}/>
<label htmlFor="name" className="form__label">
  Username
</label>
</div>

<div className="form__group field ">
<input type="password" className="form__field invalid:border-red-500 " id="password" placeholder="Name" required onChange={handleChange} />
<label htmlFor="name" className="form__label">
  Password
</label>
</div >
<div className="text-slate-400 cursor-pointer text-sm flex justify-end hover:underline hover:text-white ">
<h1>Forgotten Password?</h1>
</div>
    </div>
    <button onClick={handleSubmit} className="hover:cursor-pointer w-[22.5rem] flex items-center justify-center h-fit py-2 bg-violet rounded-md hover:scale-105 transition-all ease-in-out text-white text-lg">
       Login
    </button>
    </div>
 </div>

  )
}

export default ForgottPassword
