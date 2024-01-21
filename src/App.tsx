import React from 'react';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialHeader from './components/SocialHeader';
import circlePattern from './assets/images/pattern-circle.svg';
import ringPattern from './assets/images/pattern-rings.svg';

function App() {
  return (
    <div className=" relative bg-bgcustom text-custom font-SpaceGrotesk md:px-[5%] lg:px-[10%]">
      <SocialHeader />
      <img src={ringPattern} alt="ring pattern" className='absolute top-20 -left-60 lg:-left-10 ' />
      <Home />
      <img src={circlePattern} alt="ring pattern" className='absolute top-96 -right-10 lg:right-[40%]' />
      <Experience />
      <Projects />
      <Contact />
      <img src={ringPattern} alt="ring pattern" className='absolute bottom-48 -left-60' />
      <SocialHeader />
    </div>
  );
}

export default App;
