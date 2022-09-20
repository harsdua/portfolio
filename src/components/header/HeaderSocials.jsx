import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href ="https://linkedin.com" rel="noreferrer noopener" target="_blank" ><BsLinkedin size={56}/></a>
        <a href ="https://github.com" rel="noreferrer noopener" target="_blank"><FaGithub size={56}/></a>
    </div>
  )
}

export default HeaderSocials