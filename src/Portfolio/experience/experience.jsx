import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { Parallax } from 'rc-scroll-anim';
import Typewriter from "typewriter-effect";

function experience() {


  const faders = document.querySelectorAll('.fade-in');
  const sliders = document.querySelectorAll('.slide-in');
  const appearOptions ={
    threshold: 0,
    rootMargin:'0px 0px -100px 0px'
  }
  const appearOnScroll = new IntersectionObserver(
    function(entries,appearOnScroll){
      entries.forEach(entry=>{
        if(!entry.isIntersecting){
          return
        }
        else{
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target)
        }
      }); 
    },appearOptions
  );

  faders.forEach(fader=>{
    appearOnScroll.observe(fader)
  })
  sliders.forEach(fader=>{
    appearOnScroll.observe(fader)
  })


  return (
    <section id='experience'>
     
     <h5>
        <Typewriter
          options={{
            strings: ["What Skills I Have ?"],
            autoStart: true,
            loop: true,
          }}
        />
      </h5>
      <h2 className='abc'>My Skills and Certifications</h2>
    
          
      <div className="container experience__container">
      <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(-100px)', opacity: 0 ,overflowX:'hidden'}}
          className="code-box-shape"
        >
        <div className="experience__frontend ">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>EXCELLENT</small>
              </div>
              </article>
            <article className='experience__details'>

              <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>GOOD</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
             <div>

              <h4>BOOTSTRAP</h4>
              <small className='text-light'>GOOD</small>
             </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
             <div>

              <h4>PYTHON</h4>
              <small className='text-light'>GOOD</small>
             </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>REACT</h4>
              <small className='text-light'>GOOD</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>REACT NATIVE</h4>
              <small className='text-light'>NICE</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
              <h4>FIREBASE/SQL</h4>
              <small className='text-light'>VERY GOOD</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>NODE/EXPRESS JS </h4>
              <small className='text-light'>NICE</small>
              </div>
              </article>
            </div>
          </div>
        </Parallax>
        <Parallax
          animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: 'translateX(100px)', opacity: 0 ,overflowX:'hidden',overflowY:'hidden'}}
          className="code-box-shape"
        >
        <div className="experience__backend">
        <h3>Certifications</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>Android Application Developer</h4>
              <small className='text-light'>From IBA (BBSYDP)</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>Core Python Development</h4>
              <small className='text-light'>From Saylani</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>MERN Stack Development</h4>
              <small className='text-light'>From Saylani</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icons' />
              <div>

              <h4>Data Science Workshop</h4>
              <small className='text-light'>from DSCxNEDUET </small>
              </div>
              </article>
            </div>
          </div>
        </Parallax>

        </div>

      </section>
  )
}

export default experience