/*eslint-disable*/
import React from 'react'
import './header.css'
import Cta from './CTA'
import ME from '../../images/mypicnew.png'
import Socials from './socials'
import 'rc-texty/assets/index.css';
import Texty from 'rc-texty';
import Button from 'antd/lib/button'
import TweenOne from 'rc-tween-one';

class Header extends React.Component{
  state = {
    show: true,
  }
  geInterval = (e) => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  }
  getEnter = (e) => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  }

  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  onClick = () => {
    this.setState({
      show: false,
    }, () => {
      this.setState({
        show: true
      });
    });
  }
  render(){
  return (
    
      // <section id='header'>

        <div className="combined-wrapper">
            <div className="combined-reload">
          <Cta />
              
          {/* <Button shape="circle" icon="reload" onClick={this.onClick} /> */}
        </div>
        {this.state.show && (
          <div className="combined">
            
            <div className="combined-shape">
              
              <div className="shape-left">
                <TweenOne
                  animation={[
                    { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
              </div>
              
              <div className="shape-right">
                <TweenOne
                  animation={[
                    { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                    { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                  ]}
                />
                
              </div>
            </div>
            <Texty
              className="title"
              type="mask-top"
              delay={400}
              enter={this.getEnter}
              interval={this.geInterval}
              component={TweenOne}
              componentProps={{
                animation: [
                  { x: 130, type: 'set' },
                  { x: 100, delay: 500, duration: 450 },
                  {
                    ease: 'easeOutQuart',
                    duration: 300,
                    x: 0,
                  },
                  {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: 'easeInOutQuint',
                    duration: 1000,
                  },
                  { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                ],
              }}
            >
              Tulaib Ahmed
            </Texty>

            
            {/* <TweenOne
              className="combined-bar"
              animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
            /> */}
            
            <Texty
              className="content text-light"
              type="bottom"
              split={this.getSplit}
              delay={2200}
              interval={90}
            >
              Hi, Im Front-End-Developer precisely MERN Stack Developer
            </Texty>
          <Socials />
          <div className="me2">
            <img src={ME} alt='picture' />
            </div>
          </div>
        )}
        
      </div>
     
    //  / </section>

    
  );
}
}
export default Header;

 {/* <header>
        <div className="container header__container">
          <Texty leave>Hello I'm</Texty>
          <h1 className=''>Tulaib Ahmed</h1>
          <h5 className="text-light ">MERN Stack Developer</h5>
          <Cta />
          <Socials />
          <div className="me">
            <img src={ME} alt='picture' />
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
          </div>
      </header> */}
             {/* <div className="combined-reload">
          <Button shape="circle" icon="reload" onClick={this.onClick} />
        </div> */}