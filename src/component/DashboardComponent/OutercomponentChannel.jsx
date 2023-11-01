import { useEffect, useState } from "react";
import ChannelTab from "./ChannelTab";
import axiosInstance from "../../../Axios";
import { useSnapshot } from "valtio";
import state from "../../store";
import SkelitonList from "./SkelitonList";
import CreateChannel from "./CreateChannel";
import Swal from "sweetalert2";
import CreateDomain from "./CreateDomain";
import DomainValidation from "./DomainValidation";

function OutercomponentChannel() {
  const [createdomain, setCreatedomain] = useState(false);
  const [domain, setDomain] = useState("");
  const [channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createChannel, setCreateChannel] = useState(false);
  const [domainerror, setDomainerror] = useState({});
  const snap = useSnapshot(state);

  const handleChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = DomainValidation(domain);
    setDomainerror(error);
    console.log("Error: ", error);

    if (Object.keys(error).length == 0) {
      axiosInstance
        .post(`/domain/${snap.userId}`, { domain })
        .then((res) => {
          Swal.fire({
            title: "Success",
            text: "Domain Created Successfully",
            icon: "success",
          });
          setCreatedomain(false);
        })
        .catch((err) => {
          console.log("Error: ", err);
          if (err.response.status === 401) {
            Swal.fire(
              "Not Authorized",
              "You are not authorized to Create Domain.",
              "error"
            );
          }
        });
    } else {
      console.log("Validation Error: ", domainerror);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`/channel/${snap.userId}`)
      .then((res) => {
        setChannel(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        if (err.response.status === 401) {
          Swal.fire({
            title: "Not Authorized",
            text: "You are not authorized to perform this action.",
            icon: "error",
          });
        }

        console.log(err);
      });
  }, [snap.refreshData, snap.userId]);
  return (
    <div className=" bg-light">
      <div className="Heading  w-full flex justify-between bg-light  px-16 py-8 text-blue items-center font-semibold border-[1px]">
        <div className="flex gap-2 min-w-[180px] items-center">
          <h1>CHANNEL NAME</h1>
        </div>
        <div className="flex gap-2 items-center ">
          <h1>STATUS</h1>
        </div>
        {snap.userData.superAdmin && (
          <div className="cursor-pointer">
            <button
              className="bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all"
              onClick={() => setCreatedomain(!createdomain)}
            >
              Add Domain
            </button>
          </div>
        )}

        <div
          className="cursor-pointer"
          onClick={() => {
            snap.userData.createChannel
              ? setCreateChannel(!createChannel)
              : Swal.fire(
                  "Not Authorized",
                  "You are not authorized to Create Channel.",
                  "error"
                );
          }}
        >
          <button className="bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all ">
            Create Channel
          </button>
        </div>
        {createChannel ? (
          <CreateChannel
            value={createChannel}
            handleClose={() => setCreateChannel(false)}
          />
        ) : null}
        {createdomain ? (
          <CreateDomain
            value={createdomain}
            handleClose={() => setCreatedomain(false)}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            {...domainerror}
          />
        ) : null}
      </div>
      <div>
        {loading ? (
          <div>
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList /> <SkelitonList />
            <SkelitonList />
            <SkelitonList />
            <SkelitonList />{" "}
          </div>
        ) : (
          channel?.data?.map((item, index) => (
            <ChannelTab key={index} {...item} />
          ))
        )}
      </div>
    </div>
  );
}

export default OutercomponentChannel;
