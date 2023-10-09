import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'
import { useParams } from 'react-router-dom'
export default function ChannelCard() {
  const [channelVideos,setchannelVideos] = useState([])
  const {id} = useParams()
  const fetchChanelDetials = ()=>{
    fetchDataFromApi(`channel/videos/?id=${id}`).then((res)=>{
      setchannelVideos([res.contents])
    })
  }
  // useEffect(()=>{
  //   fetchChanelDetials()
  // },[]) 
  return (
    <>
    <div className="text-white">
     <h1>Videos</h1>
     <div className="grid grid-cols-3 gap-3">
       {
        channelVideos.map((videos)=>{
          return(
            {/* <img src={videos.video.thumbnails[0].url} alt="" /> */}
          )
        })
       }
     </div>
    </div>

    </>
  )
}
