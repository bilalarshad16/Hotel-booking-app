import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import SinglePage from '../../SinglePage/SinglePage'
import MostPopular from '../HomeSection/popular/MostPopular'
import Blog from '../Blog/blog-single-page/Blog'
import Download from '../HomeSection/Download/Download'
import Works from '../HomeSection/Works/Works'
import Gallery from '../HomeSection/gallery/Gallery'
import Footer from '../../common/footer/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <HomeAbout />
        <DestinationHome />
        
        <MostPopular />
        <Download />
        <Works />
        <Gallery />
        <Footer />
        
    </>
  )
}

export default Home