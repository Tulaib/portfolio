import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function footer() {
  return (
    <footer>
              {/* <ParticlesBg  color="rgba(77,181,255,0.4)" num={200} type="cobweb" bg={true}/> */}
              {/* <ParticlesBg  color="#4db4fc" num={200} type="cobweb" bg={true}/> */}
      <a href="#" className='footer__Logo'></a>
      <ul className='permalinks'>
        <li><a href="#"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#experience"></a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#contact"></a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/tulaib.siddique"><FaFacebook/></a>
        <a href="https://www.instagram.com/tulaibsid/"><FaInstagram/></a>
        <a href="https://github.com/Tulaib?tab=repositories"><FaGithub/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Tulaib's Portfolio. All Rights Reserved.</small>
          </div>
    </footer>
  )
}

export default footer