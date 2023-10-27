import { useEffect, useState } from 'react'
import InboxTab from './InboxTab'
import { RiDeleteBin5Line } from 'react-icons/ri'
import axiosInstance from '../../../Axios'
import InboxTabLoading from './InboxTabLoading'

function OutercomponentInbox() {

  const [inbox, setInbox] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   setTimeout(()=>{
     axiosInstance
       .get("message/contact")
       .then((res) => {
         setInbox(res.data.data);
         setIsLoading(false);
       })
       .catch((err) => console.log(err));
   },1000 )
  },[])

  return (
    <div className=" px-5 py-8 flex flex-col gap-2">
      <div className="justify-end flex ">
        <div className="gap-1 button h-12 w-24 rounded-xl bg-blue flex justify-center items-center text-white font-semibold">
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
          inbox?.map((item,index) => <InboxTab {...item} key={index} />)
        )}
      </div>
    </div>
  );
}

export default OutercomponentInbox
