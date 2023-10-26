import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Switch } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

import axiosInstance from "../../../Axios";

function MoreUser({ show, handleView, view, ...item }) {
  const [value, setValue] = useState({
    addUser: item.addUser,
    deleteUser: item.deleteUser,
    createChannel: item.createChannel,
    deleteChannel: item.deleteChannel,
    channelLimit: item.channelLimit,
    id: item._id,
  });

  const handlePermmison = () => {
    setTimeout(async () => {
      console.log("value : ",value);
    axiosInstance
      .post("users/user-permission", value)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))}, 1000)}
  

 
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
            isChecked={value.addUser ? true : false}
            onChange={async(prevValu) =>
              {await setValue({ ...value, addUser: !value.addUser }) 
              handlePermmison()
            }
              
            }
          />
        </div>
        <div className="DeleteUser flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="DeleteUser">Delete User</label>
          <Switch
            id="createUser"
            isChecked={value.deleteUser ? true : false}
            onChange={(prevValu) =>
              setValue({ ...value, deleteUser: !value.deleteUser })
            }
          />
        </div>
        <div className="createChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="createChannel">Create Channel</label>
          <Switch
            id="createUser"
            isChecked={value.createChannel ? true : false}
            onChange={(prevValu) =>
              setValue({ ...value, createChannel: !value.createChannel })
            }
          />
        </div>
        <div className="DeleteChanel flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="Delete Channel">Delete Channel</label>
          <Switch
            id="createUser"
            isChecked={value.deleteChannel ? true : false}
            onChange={(prevValu) =>
              setValue({ ...value, deleteChannel: !value.deleteChannel })
            }
          />
        </div>
        <div className="ChanelLimit flex flex-col items-center gap-2 cursor-pointer">
          <label htmlFor="limit">Channel Limit</label>
          <select
            name="limit"
            id="limit"
          value={value.channelLimit}
            className="w-10  outline-1 outline"
            onChange={(e) => {
              const selectedValue = parseInt(e.target.value);
              setValue({ ...value, channelLimit: selectedValue });
            }}
          >
            {[...Array(50)].map((item, index) => (
              <option defaultValue={value.channelLimit} key={index} value={index + 1}>
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
              console.log("button");
            }}
          >
            <HiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreUser
