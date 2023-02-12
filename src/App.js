import Header from './Portfolio/header/Header'
import Nav from './Portfolio/nav/Nav'
import Experience from './Portfolio/experience/experience'
import Portfolio from './Portfolio/port/portfolio'
import Testimonial from './Portfolio/testimonials/testimonial'
import Contact from './Portfolio/contactme/contact'
import Footer from './Portfolio/footer/footer'
import About from './Portfolio/Aboutme/aboutme'
import './App.css';

const App = ()=> {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
