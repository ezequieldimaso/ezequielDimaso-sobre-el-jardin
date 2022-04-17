import React from 'react'
import "./footer.css"
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
import{BsWhatsapp} from "react-icons/bs"
const Footer = () => {
  return (
    <div className=" footer bg-dark text-white text-center">
        <div className='redes'>
            <div className='icon1'><a href="https://es-la.facebook.com/login/device-based/regular/login/" target="_blank"><BsFacebook/></a></div>
            <div className='icon2'><a href="https://www.instagram.com/?hl=es" target="_blank"><BsInstagram/></a></div> 
            <div><a href="https://twitter.com/?lang=es" target="_blank"><BsTwitter/></a></div>       
        </div>
        <p>© En el jardin-2022</p>
        <div className="btnWhatsapp">
                <a href="https://wa.me/5491133516646" target="_blank"><BsWhatsapp/> </a>
        </div>
  </div>
  )
}

export default Footer