import { useEffect, useState } from 'react'
import InboxTab from './InboxTab'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axiosInstance from '../../../Axios'
import InboxTabLoading from './InboxTabLoading'
import { useSnapshot } from 'valtio'
import state from '../../store'

function OutercomponentInbox() {

  const snap = useSnapshot(state)
  const [inbox, setInbox] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (inboxId, isChecked) => {
    if (isChecked) {
      setSelectedIds([...selectedIds, inboxId]); 
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== inboxId)); 
    }
  };

  const handleDelete = (e)=>{
      const Ids = {selectedIds}
    e.preventDefault()
    axiosInstance
      .get(`/message/delete-message/${Ids}/${snap.userId}`, {
        withCredentials: true,
      })
      .then((res) => {
      
        state.refreshData = res.data;
      })
      .catch((err) => console.log("Error: ", err));
  }
  

  useEffect(() => {
   setTimeout(()=>{
     axiosInstance
       .get("message/contact", { withCredentials: true })
       .then((res) => {
         setInbox(res.data.data);
         setIsLoading(false);
       })
       .catch((err) => console.log(err));
   },500 )
  },[snap.refreshData])

  return (
    <div className=" px-5 py-8 flex flex-col gap-2">
      <div className="justify-end flex ">
        <div onClick={handleDelete} className="cursor-pointer hover:scale-95 transition-all gap-1 button h-12 w-24 rounded-xl bg-blue flex justify-center items-center text-white font-semibold">
          <RiDeleteBin5Line />
          <h1>Delete</h1>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {isLoading ? (
          <>
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
            <InboxTabLoading />
      
          </>
        ) : (
          inbox?.map((item,index) => <InboxTab  onCheckboxChange={handleCheckboxChange} {...item}  key={index} />)
        )}
      </div>
    </div>
  );
}

export default OutercomponentInbox
