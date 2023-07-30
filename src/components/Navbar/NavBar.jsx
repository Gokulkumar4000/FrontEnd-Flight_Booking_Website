import React , {useState} from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../asserts/logo.png'


const NavBar = () => {

  const [active,setActive] = useState('navBarMenu')
  const showNavBar =()=>{
    setActive('navBarMenu showNavBar');
  }
  const removeNavBar =()=>{
    setActive('navBarMenu');
  }
  const [nobg,addBg] = useState('navBarTwo')
  const addBgColor =()=>{
    if (window.scrollY >=10){
      addBg('navBarTwo navbar_With_Bg');
    }else{
      addBg('navBarTwo');
    }
  }
  window.addEventListener('scroll',addBgColor)
  return (
    <div className='navBar flex'>

      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon'/>
        </div>
        <div className='none  flex'>
          <li className="li flex" ><BsPhoneVibrate className='icon' />Support</li>
          <li className="li flex"><AiOutlineGlobal className='icon' />Languages</li>
        </div>
        <div className="abt flex">
          <span className='span'>Sign In</span>
          <span className='span'>Sign Out</span>
        </div>
      </div>

      <div className={nobg}>
        <div className="logoDiv">
          <img src={logo} alt="Logo" className='logo'/>
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItems">Home</li>
            <li onClick={removeNavBar} className="listItems">About</li>
            <li onClick={removeNavBar} className="listItems">Offers</li>
            <li onClick={removeNavBar} className="listItems">Seats</li>
            <li onClick={removeNavBar} className="listItems">Destinations</li>
          </ul>
          <button onClick={removeNavBar} className='btn flex btnOne'>
            Contact
          </button>
        </div>
        <button className='btn flex btnTwo'>
          Contact
        </button>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar