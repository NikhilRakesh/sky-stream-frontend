import React, { useEffect, useState } from "react";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import MoreUser from "./MoreUser";
import Message from "./Message";

function UserTab({ ...item }) {
  
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  return (
    <div className="bg-white ">
      <div className="bg-white flex py-6 px-16  border-b-[0.5px] items-center justify-between border-gray ">
        <div className="Name gap-3 flex items-center min-w-[250px] max-w-[250px]  ">
          <AiTwotoneMinusCircle className="min-w-[15px] max-w-[15px]" color={item.color} />
          <h1 className="text-lg font-medium ">{item.name}</h1>
        </div>
        <div className="Live text-red min-w-[50px]">Live</div>
        <div className="Date">14-12-2023 </div>

        <div className="text-3xl text-blue" onClick={() => setShow(!show)}>
          <MdOutlineExpandMore />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {view ? <Message view={view} handleClose={setView} /> : null}
      </div>
      {show ? (
        <div className="flex flex-col transition-all ease-in-out duration-1000">
          {" "}
          <MoreUser handleView={setView} view={view} show={show} />{" "}
        </div>
      ) : null}
    </div>
  );
}

export default UserTab;
