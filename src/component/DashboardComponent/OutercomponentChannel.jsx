import  { useEffect, useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import ChannelTab from './ChannelTab'
import axiosInstance from '../../../Axios'
import { useSnapshot } from 'valtio'
import state from '../../store'
import SkelitonList from './SkelitonList'

function OutercomponentChannel() {
  const [channel,setChannel] = useState([])
  const [loading,setLoading] = useState(true)
  const [createChannel,setCreateChannel] = useState(false)
  const snap = useSnapshot(state)

  useEffect(()=>{
 const user =localStorage.getItem('user')
    console.log(user)
     axiosInstance.get(`/channel/${snap.userId}`).then((res)=>{
      console.log(res.data)
      setChannel(res.data)
     }).then(()=>setLoading(false)).catch((err)=>console.log(err))
  },[snap.refreshData, snap.userId])
  return (
    <div className=' bg-light'>
        <div className='Heading  w-full flex justify-between bg-light  px-16 py-8 text-blue items-center font-semibold border-[1px]'>
            <div className='flex gap-2 items-center '> 
                <h1>CHANNEL NAME</h1>
                <MdOutlineExpandMore className='text-xl'/>
            </div>
            <div className='flex gap-2 items-center '> 
                <h1>STATUS</h1>
                <MdOutlineExpandMore className='text-xl'/>
            </div>
            <div className='min-w-[400px]'>

            </div>
            <div onClick={()=>{setCreateChannel(!createChannel)
            console.log(createChannel)}}>
               <button className='bg-blue text-white px-3 py-1 rounded-md hover:scale-105 transform transition-all'> Create Channel </button>
            </div>
           
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
