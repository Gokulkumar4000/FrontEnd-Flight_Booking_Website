import React from 'react';
import london from '../../asserts/london.jpg';
import gokul from '../../asserts/gokul.jpg';
import paris from '../../asserts/paris.jpg';
import dubai from '../../asserts/dubai.jpg';
import singapore from '../../asserts/singapore.jpg';

const traveler=[
  {
    id:1,
    destinationimage:paris,
    travllerimage:gokul,
    travellername:'Gokul',
    sociallink:'@gokul2955'
  },
  {
    id:2,
    destinationimage:london,
    travllerimage:gokul,
    travellername:'Gokul',
    sociallink:'@gokul2955'
  },
  {
    id:3,
    destinationimage:dubai,
    travllerimage:gokul,
    travellername:'Gokul',
    sociallink:'@gokul2955'
  },
  {
    id:4,
    destinationimage:singapore,
    travllerimage:gokul,
    travellername:'Gokul',
    sociallink:'@gokul2955'
  }
]
const Travellers = () => {
  return (

    

    <div className='travellers container section'>
      <div className="sectioncontainer">
        <h2 className="h2">
          Top travellers of this month!
        </h2>
        <div className="travellerscontainers grid">
          {
            traveler.map(({id,destinationimage,travllerimage,travellername,sociallink})=>{
              return(
                <div className="singletraveller">
                <img src={destinationimage} className='destinationimage' alt="" />
                  <div className="travellerdetails">
                    <div className="travellerpicture">
                      <img src={travllerimage} alt="" className='travllerimage' />
                    </div>
                    <div className="travellername">
                      <span className="span">{travellername}</span><p className='para'>{sociallink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="singletraveller">
            <img src={london} className='destinationimage' alt="" />
            <div className="travellerdetails">
              <div className="travellerpicture">
                <img src={gokul} alt="" className='travllerimage' />
              </div>
              <div className="travellername">
                <span className="span">Gokul</span>@gokul2955
              </div>
            </div>
          </div>
          <div className="singletraveller">
            <img src={london} className='destinationimage' alt="" />
            <div className="travellerdetails">
              <div className="travellerpicture">
                <img src={gokul} alt="" className='travllerimage' />
              </div>
              <div className="travellername">
                <span className="span">Gokul</span><p className='para'>@gokul2955</p>
              </div>
            </div>
          </div> */}
        </div>
      </div> 
    </div>
  )
}

export default Travellers