import React, { useEffect, useState } from 'react'
import DomainTab from './DomainTab'
import { useSnapshot } from 'valtio'
import state from '../../store'
import axiosInstance from '../../../Axios'
import SkelitonList from './SkelitonList'
import DomainLoading from './DomainLoading'

const OutercomponentDomain = () => {
  const [domain,setDomain] = useState([]);
  const [loading,setLoading] = useState(true)

  const snap = useSnapshot(state)

    useEffect(()=>{
        axiosInstance.get(`/domain/${snap.userId}`).then((res)=>{
            setDomain(res.data.domain)
        }).then(()=>setLoading(false)).catch((err)=>{
            console.log(err);  
        }) 
    },[snap.refreshData])

  return (
    <div className='w-full flex flex-col gap-2 '>
    <div className='flex w-full px-24 justify-start items-center font-bold text-blue bg-white shaddow h-20  border-b-4'>
     <h1>Domain Name</h1>

    </div>
     {loading ? <div><DomainLoading /> <DomainLoading /> <DomainLoading /> </div>:
       domain?.map((item, index) => <DomainTab  key={index} {...item} />)
     }
           
    </div>
  )
}

export default OutercomponentDomain
