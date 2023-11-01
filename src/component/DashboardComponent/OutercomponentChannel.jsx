import  { useEffect, useState } from 'react'
import ChannelTab from './ChannelTab'
import axiosInstance from '../../../Axios'
import { useSnapshot } from 'valtio'
import state from '../../store'
import SkelitonList from './SkelitonList'
import CreateChannel from './CreateChannel'
import Swal from 'sweetalert2'
import CreateDomain from './CreateDomain'

function OutercomponentChannel() {
  const [createdomain,setCreatedomain] = useState(false)
  const [domain,setDomain] = useState('')
  const [channel,setChannel] = useState([])
  const [loading,setLoading] = useState(true)
  const [createChannel,setCreateChannel] = useState(false)
  const snap = useSnapshot(state)

  const handleChange = (e)=>{
    setDomain(e.target.value)
  }

  const handleSubmit = (e)=>{
    console.log(snap.userId);
    e.preventDefault()
    axiosInstance.post(`/domain/${snap.userId}`,{domain}).then((res)=>{
        console.log(res.data);
        Swal.fire({
          title: "Success",
          text: "Domain Created Successfully",
          icon: "success",
        });
        setCreatedomain(false)
      }).catch((err)=>{
        console.log("Error: ",err);
        Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
        })
      })
  }


  useEffect(()=>{
     axiosInstance.get(`/channel/${snap.userId}`).then((res)=>{
      setChannel(res.data)
     }).then(()=>setLoading(false)).catch((err)=>{
      
       if (err.response.status === 401) {
        Swal.fire({
          title: "Not Authorized",
          text: "You are not authorized to perform this action.",
          icon: "error",
        });
       }

      console.log(err)})
  },[snap.refreshData, snap.userId])
  return (
    <div className=' bg-light'>
        <div className='Heading  w-full flex justify-between bg-light  px-16 py-8 text-blue items-center font-semibold border-[1px]'>
            <div className='flex gap-2 min-w-[180px] items-center'> 
                <h1>CHANNEL NAME</h1>
        
            </div>
            <div className='flex gap-2 items-center '> 
                <h1>STATUS</h1>
        
            </div>
            <div className='cursor-pointer' >
                 <button className='bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all' onClick={()=> setCreatedomain(!createdomain)}> Add Domain </button>
            </div>
          
          
            <div className='cursor-pointer' onClick={()=>{setCreateChannel(!createChannel)
            }}>
               <button className='bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all '> Create Channel </button>
            </div>
           {
               createChannel ? <CreateChannel value={createChannel} handleClose={()=>setCreateChannel(false)} /> :null     }
            {
              createdomain ? <CreateDomain value={createdomain} handleClose={()=>setCreatedomain(false)} handleChange={handleChange} handleSubmit={handleSubmit} />  : null
            }   
        </div>
      <div>
      {
        loading ? ( <div><SkelitonList />
        <SkelitonList /><SkelitonList /><SkelitonList /> <SkelitonList /><SkelitonList /><SkelitonList /><SkelitonList /> </div>
      ) : channel?.data?.map((item,index)=><ChannelTab key={index} {...item}/>)
      }
        
      </div>
    </div>
  )
}

export default OutercomponentChannel
