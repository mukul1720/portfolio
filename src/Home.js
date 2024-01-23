import React from 'react'
import "./Home.css"
import Pic from "./mukul.jpg"
    
const Home = () => {
  return (
    <div className='home'>
      <div className='margin'>
        <div className='name'>
          <h2>Mukul Singla</h2>
          <p>Creative Frontend Developer</p>
        </div>
        <div className='image'>
          <img src={Pic} alt="" />
        </div>
      </div>
    </div>


  )
}

export default Home