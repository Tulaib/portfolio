import React ,{useRef}from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessage2Line} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect'
TweenOne.plugins.push(SvgMorphPlugin);

function Contact(props) {

  const animation ={
    d: 'M60,10L60,90L140,90L140,10Z',
    yoyo: true, 
    repeat: -1, 
    duration: 1000,
  }
const tweenData = '100%';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t3sv7nn', 'template_csfmov8', form.current, 'cVGbyWbvXWSskdc4s')
      .then((result) => {
          console.log(result.text);
          toast('I Received you email THANK YOU!');
          e.target.reset()
        }, (error) => {
          console.log(error.text);
          toast.error('I Didn\'t you email THANK YOU!')
      });
  };


  return (
    <section id='contact'>
   <h5>
        <Typewriter
          options={{
            strings: ["Get In Touch "],
            autoStart: true,
            loop: true,
          }}
        />
      </h5>      <h2 className='abc'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
        

            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tulluahsid@gmail.com</h5>
            <a href="mailto:tulluahsid@gmail.com" target='_blank'> Send a message</a>
          {/* </TweenOne> */}
          </article>
          <article className='contact__option' >
            <RiMessage2Line className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Tulaib Ahmed Siddiqui</h5>
            <a href="https://m.me/tulaib.siddique"> Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0092 305 *****20</h5>
            <a href="hhtps://api.whatsapp.com/send?phone+923052504520">
              Send a message</a>
          </article>
          </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text"  name="name"  placeholder='Your Name' required />
          <input type="email" name="email"placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' />
          <button type='submit' value='Send' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

Contact.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
export default Contact