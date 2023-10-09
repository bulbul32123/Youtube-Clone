import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'
import React, { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import ChannelCard from './ChannelCard'

export default function ChannelDetail() {
  const [channelDetail, setchannelDetail] = useState([])
  const {id} = useParams()
  const fetchChanelDetials = ()=>{
        fetchDataFromApi(`channel/details/?id=${id}`).then((res)=>{
          setchannelDetail([res])
        })
      }
      useEffect(()=>{
        fetchChanelDetials()
      },[]) 
      const Movetoabout = ()=>{
        alert('about')
      }
  return (
    <>
    <div className="bg-black h-full">
     <div className="flex justify-center items-center w-full mt-3">
     {
      channelDetail?.map((items)=>{
      return(
        <div className="container" key={Math.random()}>
       <img src={items?.banner?.desktop[0]?.url} alt="" className='border md:h-44 lg:w-full lg:mt-9 border-white' />
       <div className="flex md:justify-start flex-col md:flex-row lg:justify-center lg:mt-14 items-center channelProfile mt-6 ml-5">
        <img src={items?.avatar[1].url} className=' rounded-full h-24 md:h-32 lg:h-44'  alt="User"/>
        <div className='text-gray-400 mt-7 flex'>
        <div className="">
        <h1 className='text-white  flex justify-center md:justify-start ml-5 lg:text-[24px] font-extrabold text-[13px] md:text-[18px] tracking-wide '>{items.title} <span><BsFillCheckCircleFill className='text-white/[0.5] mt-1 ml-1 md:mt-[9px] lg:mt-3 lg:text-[14px]  text-[12px] md:ml-2 ' /></span></h1>
        <h6 className='flex md:justify-start justify-center text-gray-400 mt-2 ml-5 font-bold lg:ml-3 lg:text-[18px] text-[11px] md:text-[14px]'>{items.username} <span className='text-[10px] lg:text-[18px] lg:ml-3 md:text-[14px] font-semibold ml-1'> {items.stats.subscribersText}</span>
        <span className='text-[10px] md:text-[14px] font-semibold lg:text-[18px] lg:ml-3  ml-1'> {items.stats.videosText}</span></h6>
         <p className='md:mt-2 mt-1 ml-5 md:ml-5 text-gray-400 text-[12px] md:text-[13px] lg:text-[18px] flex justify-start'>{items.description.slice(1, 74)}...<IoIosArrowForward className='mt-1 cursor-pointer hover:text-white' onClick={Movetoabout} /></p>
        </div>
        </div>
        <div className="grid grid-cols-1">
        <button className='text-black lg:text-[20px] md:float-right bg-white border md:mt-[-40px] border-white px-3 mt-2 font-semibold rounded-3xl py-2 text-[12px] md:text-[15px]'>Subscribe</button>
        </div>
        </div>
       </div>
        
      )
     })
     }
     </div> 
    <div className="flex justify-center items-center mt-6">
      <ChannelCard channelDetail={channelDetail}/>
    </div>
    </div>
    </>
  )
}



