import React from 'react'
import wings from '../../asserts/wings.jpg'
const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectioncontainer grid">
        <div className="imgdiv">
          <img src={wings} alt="" className='img' />
        </div>
          <div className="textdiv">
            <h2 className="h2">Unaccompanied minor Lounge</h2>
            <div className="grids grid">
              <div className="singlegrid">
                <span className="gridtitle">
                  Help Through The Airport
                </span>
                <p className='para'>
                  you can also all airlines from your phone and book a flight ticket to one of your best destination
                </p>
              </div>
              <div className="singlegrid">
                <span className="gridtitle">
                  Care on flight
                </span>
                <p className='para'>
                  you can also all airlines from your phone and book a flight ticket to one of your best destination
                </p>
              </div>
              <div className="singlegrid">
                <span className="gridtitle">
                  Priority boarding
                </span>
                <p className='para'>
                  you can also all airlines from your phone and book a flight ticket to one of your best destination
                </p>
              </div>
              <div className="singlegrid">
                <span className="gridtitle">
                  Chauffeur-drive Service 
                </span>
                <p className='para'>
                  you can also all airlines from your phone and book a flight ticket to one of your best destination
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge