import React from 'react'
import Slide from './Slide'
//import Data from './Data'
import './Home.css'

const Hero = () => {
  const Data = [
    {
      images: require('../../images/slider-1.jpg')
     //images: "1"
    },
    {
      images: require('../../images/slider-2.jpg')
      //images: "2"
    },
    {
     images: require('../../images/slider-3.jpg')
     //images: "3"
    }
  
  ]
  return (
    <>
        <Slide slides={Data} />
    </>
  )
}

export default Hero