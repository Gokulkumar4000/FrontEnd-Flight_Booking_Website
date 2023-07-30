import React from 'react'
import windowe from '../../asserts/window.jpg'
const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectioncontainer">
        <div className="tittlesdiv">
          <small className='small'>Travell Support</small>
          <h2>Plan Your Travell With Confidence</h2>
          <p>Find help with booking and travel plans, see what to except along the journey!</p>
        </div>
        <div className="infodiv grid">
          <div className="textdiv grid">
            <div className="singleinfo">
              <span className="number">01</span>
              <h4>Travel requirments for Dubai</h4>
              <p>Find help with booking and travel plans, see what to except along the journey to your favourite destination!</p>
            </div>
            <div className="singleinfo">
              <span className="number">02</span>
              <h4>Chauffeur service at youur arrival</h4>
              <p>Find help with booking and travel plans, see what to except along the journey to your favourite destination!</p>
            </div>
            <div className="singleinfo">
              <span className="number">03</span>
              <h4>Multi risk travel insurence</h4>
              <p>Find help with booking and travel plans, see what to except along the journey to your favourite destination!</p>
            </div>
          </div>
          <div className="imgdiv">
            <img src={windowe} className='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support