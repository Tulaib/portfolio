import React from "react";
import ME from "../../images/mypic2.jpg";
import { FaAward } from "react-icons/fa";
import { FaOldRepublic } from "react-icons/fa";
import "./about.css";
import { Parallax } from "rc-scroll-anim";
import Typewriter from "typewriter-effect";

function aboutme() {
  // const faders = document.querySelectorAll('.fade-in');
  // const appearOptions ={
  //   threshold: 1,
  //   rootMargin:'0px 0px 100px 0px'
  // }
  // const appearOnScroll = new IntersectionObserver(
  //   function(entries,appearOnScroll){
  //     entries.forEach(entry=>{
  //       if(!entry.isIntersecting){
  //         return
  //       }
  //       else{
  //         entry.target.classList.add("appear");
  //         appearOnScroll.unobserve(entry.target)
  //       }
  //     });
  //   },appearOptions
  // );

  // faders.forEach(fader=>{
  //   appearOnScroll.observe(fader)
  // })

  return (
    <section id="aboutme">
      <h5>
        <Typewriter
          options={{
            strings: ["Get to Know !"],
            autoStart: true,
            loop: true,
          }}
        />
      </h5>
      <h2 className="abc">About Me</h2>
      <Parallax
        animation={{ scale: 1 }}
        style={{ transform: "scale(0) 1s", margin: "10px auto" }}
        // className="code-box-shape"
      >
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="mypic" />
            </div>
          </div>
          <div className="about__content ">
            <div className="about__cards">
              <Parallax
                // animation={{ scale: 1 }}
                animation={{ rotate: 360 }}
                style={{ margin: "10px auto" }}
                // className="code-box-shape"
              >
                <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>1+ year</small>
                </article>
              </Parallax>
              <Parallax
                // animation={{ scale: 1 }}
                animation={{ rotate: 360 }}
                style={{ margin: "10px auto" }}
                // className="code-box-shape"
              >
                <article className="about__card">
                  <FaOldRepublic className="about__icon" />
                  <h5>Projects</h5>
                  <small>4+ Projects</small>
                </article>
              </Parallax>
            </div>
            <p className="">
              A highly motivated and enthusiastic Front End Engineer with 1 year
              of experience in React and Next.js. As a recent graduate in
              Computer Science, I have a strong foundation in software
              development concepts and a passion for building dynamic and
              engaging web applications. With experience in developing and
              maintaining web applications using React and Next.js, I am
              confident in my ability to create interactive user interfaces and
              implement state management techniques. I am also well-versed in
              server-side rendering and optimization techniques using Next.js.
              My strong problem-solving skills, attention to detail, and passion
              for technology make me a valuable asset to any development team. I
              am eager to bring my technical skills and passion to a challenging
              role in a dynamic and fast-paced environment.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk !
            </a>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default aboutme;
