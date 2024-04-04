/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import StreamLink from './StreamLink';
import Swal from "sweetalert2";
import { MdDelete } from 'react-icons/md';
import axiosInstance from '../../../Axios';
import state from '../../store';
import { useSnapshot } from 'valtio';
function ChannelTab({ ...item }) {
  const [view, setView] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const snap = useSnapshot(state);

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Item",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .get(`/channel/delete/${item._id}?userId=${snap?.userData._id}`, { withCredentials: true })
          .then((res) => {

            state.refreshData = !snap.refreshData;
          });
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your item is safe :)", "info");
      }
    });
  };

  return (
    <div className="w-full flex justify-between px-10 py-9 border-2 bg-white">
      <div className="tab flex items-center font-semibold  w-full">
        <div className=" w-2/12 flex justify-center  ">
          <h1>{item.name}</h1>
        </div>
        <div className=" w-2/12 flex justify-center  ">
          <h1 className="text-red">Live</h1>
        </div>
        <div className="flex w-2/12   items-center  text-sm">
          <h1 className="text-black text-base">Streamkey : </h1>{" "}
          {item.streamKey}
        </div>
        <div className='w-2/12 flex justify-center'>
          <button
            className={`w-14 h-8 flex items-center rounded-full border ${isToggled ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setIsToggled((prev) => !prev)}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform border transition-all duration-300 ${isToggled ? 'translate-x-7' : ''}`}
            />
          </button>
        </div>
        <div className=" w-2/12 flex justify-center ">
          <button
            onClick={handleDelete}
            className="bg-red px-2 py-2 rounded-md text-white text-sm"
          >
            <MdDelete />
          </button>
        </div>
        <div
          className="cursor-pointer  w-2/12 flex justify-center  "
          onClick={() => {
            setView(!view);

          }}
        >
          <RiMore2Fill />
        </div>
      </div>

      {view ? (
        <StreamLink view={view} {...item} handleClose={() => setView(false)} />
      ) : null}
    </div>
  );
}

export default ChannelTab;

