import React from "react";
import Img from "../../images/drfit.PNG";
import ImgDale from "../../images/dalle.PNG";
import Img2 from "../../images/blood.jpg";
import Img3 from "../../images/aistore.PNG";
import "./portfolio.css";
import { Parallax } from "rc-scroll-anim";
import Typewriter from "typewriter-effect";

function portfolio() {
  return (
    <section>
      <h5>
        <Typewriter
          options={{
            strings: ["My Work ..."],
            autoStart: true,
            loop: true,
          }}
        />
      </h5>
      <h2 className="abc">Portfolio</h2>
      <Parallax
        animation={{ x: 0, y: 2, opacity: 1, playScale: [0.5, 0.8] }}
        style={{
          transform: "translated(100px)",
          opacity: 0,
          transition: "ease-in",
        }}
        className="code-box-shape"
      >
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img width="400px" height="150px" src={ImgDale} alt="" />
            </div>
            <h3>My Dalle Community MERN</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/Tulaib/MyDalleCommunity"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://openaibytas.netlify.app/"
                className="btn btn-primary"
              >
                Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img width="400px" height="150px" src={Img} alt="" />
            </div>
            <h3>Dr Fitness A React Based Web Application</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Tulaib/Drfitenss" className="btn">
                Github
              </a>
              <a
                href="https://drfitness12.herokuapp.com/"
                className="btn btn-primary"
              >
                Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img width="400px" height="150px" src={Img2} alt="" />
            </div>
            <h3>Blood Bank A React Native Application</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Tulaib" className="btn">
                Github
              </a>
              <a href="#" aria-disabled className="btn btn-primary">
                Not on PlayStore
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img width="400px" height="150px" src={Img3} alt="" />
            </div>

            <h3>AiStore A Html/CSS bases Website</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Tulaib" className="btn">
                Github
              </a>
              <a
                href="https://tulluweb.web.app/ass4.html"
                className="btn btn-primary"
              >
                Demo
              </a>
            </div>
          </article>
        </div>
      </Parallax>
    </section>
  );
}

export default portfolio;

{
  /* <section>
<h5>My Work</h5>
<h2 className="abc">Portfolio</h2>
<div className="container portfolio__container">
  <article className="portfolio__item">
    <div className="portfolio__item-image">
      <img  width='400px' height='150px'   src={Img} alt="" />
    </div>
    <h3>Dr Fitness A React Based Web Application</h3>
    <div className="portfolio__item-cta">
      <a
        href="https://github.com/Tulaib?tab=repositories"
        className="btn"
      >
        Github
      </a>
      <a
        href="https://dribbble.com/shots/14956864-Doctor-app-exploration-v2"
        className="btn btn-primary"
      >
        Demo
      </a>
    </div>
  </article>
  <article className="portfolio__item">
    <div className="portfolio__item-image">
      <img width='400px' height='150px' src={Img2} alt="" />
    </div>
    <h3>Blood Bank A React Native Application</h3>
    <div className="portfolio__item-cta">
      <a
        href="https://github.com/Tulaib?tab=repositories"
        className="btn"
      >
        Github
      </a>
      <a href="#" aria-disabled className="btn btn-primary">
        Not on PlayStore
      </a>
    </div>
  </article>
  <article className="portfolio__item">
    <div className="portfolio__item-image">
      <img  width='400px' height='150px' src={Img3} alt="" />
    </div>

    <h3>AiStore A Html/CSS bases Website</h3>
    <div className="portfolio__item-cta">
      <a
        href="https://github.com/Tulaib?tab=repositories"
        className="btn"
      >
        Github
      </a>
      <a
        href="https://tulluweb.web.app/ass4.html"
        className="btn btn-primary"
      >
        Demo
      </a>
    </div>
  </article>
</div>
</section> */
}
