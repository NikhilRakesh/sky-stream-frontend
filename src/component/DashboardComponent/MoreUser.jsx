/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Switch } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

import axiosInstance from "../../../Axios";
import state from "../../store";
import { useSnapshot } from "valtio";

// ! handlePermission has to be done

function MoreUser({ show,handleChange,value, handleView, view, ...item  }) {
  return (
    <div>
      <div
        className={`flex px-5 py-10 justify-between ${
          show ? "z-0" : "-z-10"
        } border-b-2`}
      >
        <div className="cursor-pointer preview flex flex-col items-center gap-2">
          <label>Preview</label>
          <div className="text-xl text-blue">
            <AiOutlinePlayCircle />
          </div>
        </div>
        <div className="createUser flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="createUser">Create User</label>

          <Switch
            id="createUser"
            name="addUser"
            isChecked={value.addUser ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="DeleteUser flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="DeleteUser">Delete User</label>
          <Switch
            id="DeleteUser"
            name="deleteUser"
            isChecked={value.deleteUser ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="createChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="createChannel">Create Channel</label>
          <Switch
            id="createChannel"
            name="createChannel"
            isChecked={value.createChannel ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="DeleteChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="DeleteChannel">Delete Channel</label>
          <Switch
            id="DeleteChannel"
            name="deleteChannel"
            isChecked={value.deleteChannel ? true : false}
            onChange={handleChange}
          />
        </div>
        <div className="ChanelLimit flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="limit">Channel Limit</label>
          <select
            name="limit"
            id="limit"
            defaultValue={value.channelLimit}
            className="w-10  outline-1 outline"
            onChange={handleChange}
          >
            {[...Array(50)].map((item, index) => (
              <option
                defaultValue={value.channelLimit}
                key={index}
                value={index + 1}
              >
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="SendMessage flex flex-col items-center gap-2 cursor-pointer ">
          <label>Send Message</label>
          <div
            className="text-2xl"
            onClick={() => {
              handleView(!view);
           
            }}
          >
            <HiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreUser;
