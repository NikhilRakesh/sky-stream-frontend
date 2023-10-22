import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";

function DashboardHeader() {
  return (
    <div className="flex justify-between py-6 px-10 items-center ">
      <div className="text-2xl font-bold ">
        <h1>Dashboard</h1>
      </div>
      <div className="left flex items-center gap-8">
        <div className="text-xl bg-gray rounded-full w-9 h-9 justify-center items-center flex">
          <FiSearch />
        </div>
        <div className="text-xl bg-gray rounded-full w-9 h-9 justify-center items-center flex">
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
