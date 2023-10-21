import React from 'react'
import AboutCard from './AboutCard'
import featureimage from '../../images/feature-img-1.jpg'
import HeadTitle from '../../common/Navbar/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>

        <HeadTitle />
        <section className='about top'>
            <div className='container'>
                <AboutCard />
            </div>
        </section>

        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>Our <span>Features</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className='secondary-btn'>
                         Explore More <i className='fas fa-long-arrow-alt-right'></i>
                   </button>
                </div>

                <div className='row image'>
               <img src={featureimage} alt='' />
               <div className='control-btn'>
                   <button className='prev'>
                        <i className='fas fa-play'></i>
                   </button>  
               </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default About