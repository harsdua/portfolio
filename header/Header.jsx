import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.jpg'



const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5> Hello I'm</h5>
      <h1> Harsh Dua</h1>
      <h5 className="text-light"> Student - Aspiring Developer </h5>
      <CTA/>

      <div className="imgbox">
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      </div>
      <HeaderSocials/>

      </div>
    </header>


    )
}

export default Header