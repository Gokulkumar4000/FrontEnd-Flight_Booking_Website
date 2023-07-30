import React from 'react'
import {AiFillYoutube,AiOutlineTwitter} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import {BsGithub} from 'react-icons/bs'
import logo from '../../asserts/logo.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectioncontainer container grid">
        <div className="gridone">
          <div className="logodiv">
            <img src={logo} alt="" className='logo' />
          </div>
          <p className="para">Your mind should be stronger than your feelings , Fly!</p>
          <div className="socialicon flex">
            <AiOutlineTwitter className="icon"/>
            <TiSocialFacebook className="icon"/>
            <AiFillYoutube className="icon"/>
            <BsGithub className="icon"/>
          </div>
        </div>
        <div className="footerlinks">
          <span className="linktitle">Informarion</span>
          <li className="li">
            <a href="">Home</a>
          </li>
          <li className="li">
            <a href="">Explore</a>
          </li>
          <li className="li">
            <a href="">Flight Status</a>
          </li>
          <li className="li">
            <a href="">Travel</a>
          </li>
          <li className="li">
            <a href="">Check In</a>
          </li>
          <li className="li">
            <a href="">Manage Your Booking</a>
          </li>
        </div>
        <div className="footerlinks">
          <span className="linktitle">Quick Guide</span>
          <li className="li">
            <a href="">FAQ</a>
          </li>
          <li className="li">
            <a href="">How T</a>
          </li>
          <li className="li">
            <a href="">Features</a>
          </li>
          <li className="li">
            <a href="">Baggage</a>
          </li>
          <li className="li">
            <a href="">Root Map</a>
          </li>
          <li className="li">
            <a href="">Communities</a>
          </li>
        </div>
        <div className="footerlinks">
          <span className="linktitle">Informarion</span>
          <li className="li">
            <a href="">Cauffuer</a>
          </li>
          <li className="li">
            <a href="">Our Partners</a>
          </li>
          <li className="li">
            <a href="">Destinations</a>
          </li>
          <li className="li">
            <a href="">Careers</a>
          </li>
          <li className="li">
            <a href="">Transportations</a>
          </li>
          <li className="li">
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>
      <div className="copyrightdiv flex">
        <p>All Rights Reserved Designed | Developed by <a href="https://emailto-gokulkumargk295@gmail.com" target='_blank'>GokulKumar.K</a></p>
      </div>
    </div>
  )
}

export default Footer