/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import UserTab from "./UserTab";
import axiosInstance from "../../../Axios";
import SkelitonList from "./SkelitonList";
import CreateUser from "./CreateUser";
import { useSnapshot } from "valtio";
import state from "../../store";

function OutercomponentUser() {
  const snap = useSnapshot(state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createuser, setCreateuser] = useState(false);
  const [resopnes, setResponse] = useState([]);

  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    domain: "",
    color: "",
    limit: "",
    expiryDate: "",
    addUser: true,
    deleteUser: false,
    createChannel: false,
    deleteChannel: false,
  });

  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    console.log(formData.limit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/users/${snap.userId}/create-user/`, formData)
      .then((res) => {
        state.refreshData = !snap.refreshData;
        setResponse(true)
        setCreateuser(false)
      })
      .catch((err) => console.log("error :", err));
  };


  useEffect(() => {
    axiosInstance
      .get(`/users/${snap.userId}`)
      .then((res) =>{
         setData(res.data)
      })
      .then((res) => {
        setLoading(false)  
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [snap.refreshData]);

  return (
    <div className="bg-gray relative">
      <div
        className="flex justify-between items-center border-b-2 border-gray
     px-20 py-9 text-blue font-bold bg-white"
      >
        <div className="name flex items-center ">
          NAME
          <MdOutlineExpandMore />
        </div>
        <div className="status flex items-center  ">
          STATUS
          <MdOutlineExpandMore />
        </div>
        <div className="expiryDate flex items-center ">
          CREATED DATE
          <MdOutlineExpandMore />
        </div>

        <div className="expiryDate flex items-center ">
          EXPIRY DATE
          <MdOutlineExpandMore />
        </div>
        <div
          className=" cursor-pointer hover:scale-105 transform ease-in-out w-fit h-fit bg-blue px-2 py-1 rounded-lg text-white"
          onClick={() => {
            setCreateuser(!createuser);
          }}
        >
          Create User
        </div>
      </div>
      <div>
        {createuser ? (
          <CreateUser
            value={createuser}
            
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClose={setCreateuser}
          />
        ) : null}
      </div>
      <div>
        {loading ? (
          <div>
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />{" "}
          </div>
        ) : (
          data?.user?.map((item, index) => <UserTab  key={index} {...item} />)
        )}
      </div>
    </div>
  );
}
export default OutercomponentUser;
