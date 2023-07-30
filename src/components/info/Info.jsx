import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsBookmarkCheck, BsShieldCheck} from 'react-icons/bs'
const Info = () => {
  return (
    <div className='info setion'>
      <div className="infocontainer container">
        <div className="titlediv flex">
          <h2 className="h2">Travel to make memories all around the World</h2>
          <button className="btn">
            View All
          </button>
        </div>
        <div className="cardsdiv grid">
          <div className="singlecard grid">
            <div className="icondiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardtitle">Book & Relax</span>
            <p className='para'>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
          <div className="singlecard grid">
            <div className="icondiv flex">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardtitle">Smart Checklist</span>
            <p className='para'>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
          <div className="singlecard grid">
            <div className="icondiv flex">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardtitle">Save More</span>
            <p className='para'>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info