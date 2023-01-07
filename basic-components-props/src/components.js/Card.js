import React from 'react'
import Title from './Title'
import Img from './Img'
import Description from './Description'
import { useState } from 'react'
function Card() {
    const [data, setData]=useState({
        title:"HiCoders",
        img: "https://picsum.photos/200",
        description:"aciklama"
        
    })
  return (
    <div style={{width:"300px", border:"1px solid black"}}>
    <Title title={data.title} />
    <Img  img={data.img} />
    <Description description={data.description} />
    </div>
  )
}

export default Card