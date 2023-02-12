import React, { useState } from "react";
import CV from "../../images/resume.pdf";
import ParticleEffectButton from "react-particle-effect-button";
// import ParticleEffectButton from "react-particle-effect-button";
import Texty from 'rc-texty';
import Typewriter from "typewriter-effect";

const CTA = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        <Texty>Download Resume</Texty>
        {/* <ParticleEffectButton color="#121019" hidden={hidden}>
          Download Resume{" "}
        </ParticleEffectButton> */}
      </a>
      <a href="#contact" className="btn btn-primary" style={{minWidth:'100px'}}>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
