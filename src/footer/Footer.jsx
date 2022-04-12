import React from 'react'
import "./footer.css"
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className=" footer bg-dark text-white text-center">
        <div className='redes'>
            <div className='icon1'><BsFacebook/></div>
            <div className='icon2'><BsInstagram/></div> 
            <div><BsTwitter/></div>
        </div>
    <p>© En el jardin-2022</p>
   
  </div>
  )
}

export default Footer