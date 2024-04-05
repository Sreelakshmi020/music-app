import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './Style.css';
import cardimage from '../images/img1.jpg'
import cardimage2 from '../images/img2.jpg'
import cardimage3 from '../images/img3.jpg'
import cardimage4 from '../images/img4.jpg'
import cardimage5 from '../images/img5.jpg'
import cardimage6 from '../images/img6.jpg'
import cardimage7 from '../images/img7.jpg'
import cardimage8 from '../images/img8.jpg'
import cardimage9 from '../images/img9.jpg'
import cardimage10 from '../images/img10.jpg'
import cardimage11 from '../images/img11.jpg'
import cardimage12 from '../images/img12.jpg'
import cardimage13 from '../images/img13.jpg'
import cardimage14 from '../images/img14.jpg'
import cardimage15 from '../images/img15.jpg'
import cardimage16 from '../images/img16.jpg'
import cardimage17 from '../images/image.jpg'
import cardimage18 from '../images/img18.jpg'
import Axios from '../Axios'
function Card() {
  const[data,setData] = useState([])
  const[url,setUrl] = useState('')

  useEffect(() => {
    let api_key = "AIzaSyDe50tNQlhZ9KFvYldTllXm0ljt-zURTKU";
    let url =`/playlistItems?part=snippet&playlistId=PL4fGSI1pDJn4pTWyM3t61lOyZ6_4jcNOw&key=${api_key}`

    try {
      Axios.get(url).then((response)=>{
        if(response){
          console.log(response.data)
          setData(response.data.items)
          console.log(data)
        }else{
          console.log("no response")
        }
      })
    } catch (error) {
      console.log(error)
      
    }
  }, [])
  const getVideoId =(id)=>{
    console.log("id found",id)
    setUrl(id);
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
     <>
        <div className='heading1'>
            <h2>Made Just For You</h2>
        </div>
        {
          url ? <YouTube videoId={url} opts={opts} /> :''
        }
        <div className='cards'>
          {
            data.map((obj)=>{
              return(
                <>
        
                   <div className='card'>
          <img src={obj.snippet.thumbnails.default.url} alt="" onClick={()=>getVideoId(obj.snippet.resourceId.videoId)} />
          <div className='img_text'>
            {obj.snippet.title}
          </div>
          </div>
          
                </>

              )
            })
          }
       
         
        
        </div>
      
        <div className='cards'>
          {
            data.map((obj)=>{
              return(
                <>
                   <div className='card'>
          <img src={obj.snippet.thumbnails.default.url} alt="" onClick={()=>getVideoId(obj.snippet.resourceId.videoId)} />
          <div className='img_text'>
            {obj.snippet.title}
          </div>
          </div>
          
                </>

              )
            })
          }
       
         
        
        </div>
     
        </>
    
  )
}

export default Card