import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectioncontainer grid">
        <div className="btns flex">
          <div className="singlebtn">
            <span>Economy</span>
          </div>
          <div className="singlebtn">
            <span>Bussiness Class</span>
          </div>
          <div className="singlebtn">
            <span>First Class</span>
          </div>
        </div>
        <div className="searchinput flex">
          <div className="singleinput flex">
            <div className="icondiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4 className='ha'>Location</h4>
              <input className='input' type="text" placeholder='Where do you want to go?' />
            </div>
          </div>
          <div className="singleinput flex">
            <div className="icondiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4 className='ha'>Travellers</h4>
              <input className='input' type="text" placeholder='Add guests' />
            </div>
          </div>
          <div className="singleinput flex">
            <div className="icondiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4 className='ha'>Check In</h4>
              <input className='input' type="text" placeholder='Add Date' />
            </div>
          </div>
          <div className="singleinput flex">
            <div className="icondiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4 className='ha'>Check Out</h4>
              <input className='input' type="text" placeholder='Add Date' />
            </div>
          </div>
          <button className="btn buttonblock flex">Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search