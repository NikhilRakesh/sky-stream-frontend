import  { useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import StreamLink from './StreamLink';
import Swal from "sweetalert2";
import { MdDelete } from 'react-icons/md';
import axiosInstance from '../../../Axios';
import state from '../../store';
import { useSnapshot } from 'valtio';
function ChannelTab({ ...item }) {
  const [view, setView] = useState(false);
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
         axiosInstance.get(`/channel/delete/${item._id}`).then((res) => {
            console.log(res.data);
            state.refreshData = !snap.refreshData;
         })
         Swal.fire("Deleted!", "Your item has been deleted.", "success");
       } else if (result.dismiss === Swal.DismissReason.cancel) {
         Swal.fire("Cancelled", "Your item is safe :)", "info");
       }
     });
   };


  return (
    <div className="w-full flex justify-between px-10 py-9 border-2 bg-white">
      <div className="tab flex items-center font-semibold justify-between w-full">
        <div className=" min-w-[40px] ">
          <h1>{item.name}</h1>
        </div>
        <div className=" min-w-[40px] ">
          <h1 className="text-red">Live</h1>
        </div>
        <div className="flex min-w-[40px]  items-center justify-center gap-4 text-sm">
          <h1 className="text-black text-base">Streamkey : </h1>{" "}
          {item.streamKey}
        </div>
        <div className=" min-w-[40px] ">
          <button
            onClick={handleDelete}
            className="bg-red px-2 py-2 rounded-md text-white text-sm"
          >
            <MdDelete />
          </button>
        </div>
        <div
          className="cursor-pointer min-w-[40px] "
          onClick={() => {
            setView(!view);
            console.log("clicked");
            console.log(view);
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

