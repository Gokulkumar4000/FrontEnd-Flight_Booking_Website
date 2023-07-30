import React from 'react'
import Plane from '../../asserts/plain.png'
import sky from '../../asserts/sky.mp4'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="maintext">
        <h1>Create Ever-Lasting Memory With Us!</h1>
      </div>
      <div className="homeimages flex">
        <div className="videodiv">
          <video src={sky} autoPlay muted loop className='video'></video>
        </div>
        {/* <img src={Plane} alt="" className='plane' /> */}
      </div>
    </div>
  )
}

export default Home