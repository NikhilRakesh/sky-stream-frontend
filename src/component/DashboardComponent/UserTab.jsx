import React, { useEffect, useState } from "react";
import { AiTwotoneMinusCircle } from "react-icons/ai";
import { MdOutlineExpandMore } from "react-icons/md";
import dateFormat from "dateformat";
import MoreUser from "./MoreUser";
import Message from "./Message";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axiosInstance from "../../../Axios";
import state from "../../store";
import { useSnapshot } from "valtio";

function UserTab({ ...item }) {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  const snap = useSnapshot(state);

  const [value, setValue] = useState({
    addUser: item.addUser,
    deleteUser: item.deleteUser,
    createChannel: item.createChannel,
    deleteChannel: item.deleteChannel,
    channelLimit: item.channelLimit,
    id: item._id,
  });


  const handlePermission = () => {
    axiosInstance
      .post(`users/user-permission/${item._id}`, value)
      .then((res) => console.log(res.data))
      .then(() => {
        state.refreshData = !snap.refreshData;
      })
      .catch((err) => console.log(err));
  };

const handleChange =  (e) => {
  const { name, value, type, checked } = e.target;
  const newValue = type === "checkbox" ? checked : value;
   setValue({ ...value, [name]: newValue });
 
};


  useEffect(() => {  handlePermission()}, [value]);

  const handleDelete = () => {
    Swal.fire({
      title: "Delete User",
      text: "Are you sure you want to delete this User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .get(`users/delete/${snap.userId}/${item._id}`)
          .then((res) => {
            console.log(res);

            state.refreshData = !snap.refreshData;
            Swal.fire("Deleted!", "Your User has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
              Swal.fire(
                "Not Authorized",
                "You are not authorized to delete.",
                "error"
              );
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your User is safe :)", "info");
      }
    });
  };

  return (
    <div className="bg-white ">
      <div className="bg-white flex py-6 px-16  border-b-[0.5px] items-center justify-between border-gray ">
        <div className="Name gap-3 flex items-center  max-w-[20px]  ">
          <AiTwotoneMinusCircle
            className="min-w-[15px] max-w-[15px]"
            color={item.color}
          />
          <h1 className="text-lg font-medium ">{item.name}</h1>
        </div>
        <div className="Live text-red">{item.status ? "Live" : "Offline"}</div>
        <div className="CreatedDate ">
          {dateFormat(item.createdAt, "dd-mm-yy")}
        </div>

        <div className="ExpiryDate">
          {dateFormat(item.createdAt, "dd-mm-yy")}
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="px-2 py-2 bg-red text-white rounded-md"
          >
            <MdDelete />
          </button>
        </div>
        <div className="text-3xl text-blue" onClick={() => setShow(!show)}>
          <MdOutlineExpandMore />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {view ? <Message view={view} handleClose={setView} /> : null}
      </div>
      {show ? (
        <div className="flex flex-col transition-all ease-in-out duration-1000">
          <MoreUser
            handleChange={handleChange}
            handleView={setView}
            handlePermission={handlePermission}
            view={view}
            show={show}
            value={value}
            {...item}
          />
        </div>
      ) : null}
    </div>
  );
}

export default UserTab;
