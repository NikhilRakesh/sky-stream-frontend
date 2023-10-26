import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

function Message({ view, handleClose }) {
  return (
    <div className="fixed inset-0 left-auto right-auto h-screen w-[90%]  justify-center flex items-center z-10 ">
      <div
        className={`w-[650px] pb-3 h-fit rounded-md border-black border-[1px]  bg-white  ${
          view ? "z-10" : "-z-10"
        }`}
      >
        <div className="h-[60px] flex justify-between items-center w-full px-10 border-b-[1px] border-b-black">
          <h1 className="font-semibold">Send Message</h1>
          <div
            className="hover:text-red text-2xl cursor-pointer"
            onClick={() => {
              handleClose(false);
              console.log("button");
            }}
          >
            <IoCloseCircleOutline />
          </div>
        </div>
        <div className="body flex px-10 py-5 gap-7 flex-wrap w-full items-center">
          <div className="To w-full h-10 items-center flex px-5  border-black border-[1px] gap-4">
            <h1 className="font-semibold text-gray">To:</h1>
            <input
              type="text"
              className="w-[90%] bg-transparent outline-none border-b-2 "
              placeholder=""
            />
          </div>
          <div className="body px-10 py-4 border-black w-full gap-4 flex flex-wrap border-[1px]">
            <div className="flex py-4 h-10 items-center w-full  border-gray gap-5">
              <label className="text-sm">Subject:</label>
              <input
                type="text"
                className="h-10 w-full bg-transparent border-2 focus:outline-none "
              />
            </div>
            <div className="h-full w-full flex gap-2">
              <label className="text-sm ">Message:</label>
              <textarea
                type="text"
                className="bg-transparent w-full border-2 focus:outline-none h-24"
                placeholder=""
              ></textarea>
            </div>
          </div>
          
         
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox colorScheme="blue"  className="ml-10 outline outline-[1px]"/>
            <h1 className="text-red font-semibold">Block this User</h1>
          </div>
          <div className="flex justify-end px-9 ">
          <div className="bg-blue rounded-xl hover:scale-105 transform cursor-pointer  px-4 py-2 flex items-center text-white w-fit h-fit gap-x-2">
          <h1>Sumbit</h1>
          <VscSend className=""/>
          </div>
          </div>
        <div className="h-2">

        </div>
      </div>
    </div>
  );
}

export default Message;
