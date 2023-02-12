import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {BiMessage} from 'react-icons/bi'

function Nav() {

  const [active ,setActive] = useState('');


  return (
    <nav className=''>
      <a href='#' onClick={()=>setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#aboutme' onClick={()=>setActive('#aboutme')} className={active === '#aboutme' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBookOpen /></a>
      <a href='#contact' onClick={()=>setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessage /></a>
    </nav>
  )
}

export default Nav;