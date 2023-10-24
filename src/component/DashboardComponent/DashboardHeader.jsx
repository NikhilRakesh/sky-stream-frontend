import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import Searchicon from "./Searchicon";
import { useSnapshot } from "valtio";
import state from "../../store";

function DashboardHeader() {
  const [search, setSearch ] = useState(false)
  const snap = useSnapshot(state)
  const value = state.currentTab
  return (
    <div className="flex justify-between py-6 px-10 items-center ">
      <div className="text-2xl font-bold ">
        <h1>{value == 'dashboard' ? 'Dashboard' : value === 'inbox'? "Inbox" : value ==='user' ? "Users" : value === 'channel' ? "Channel" : value=== 'live' ? "Live" : value ==='settings' ? "Settings" : "Dashboard" }</h1>
      </div>
      <div className="left flex items-center gap-8">
      
      {
            search ? <div> <Searchicon /> </div> : null
          }
          
            <div className="text-xl bg-gry rounded-full w-9 h-9 justify-center items-center flex">
          <FiSearch onClick={()=>{
            setSearch(!search)
            console.log(search);
          }} />
        
        </div>
        <div className="text-xl bg-gry rounded-full w-9 h-9 justify-center items-center flex">
          <BiBell />
        </div>
        <div className="account flex items-center gap-5">
          <div className="rounded-full h-12 w-12 bg-gray"></div>
          <div className="font-bold">Visakh</div>
          <div ><MdExpandMore /></div>
          {

          }
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;