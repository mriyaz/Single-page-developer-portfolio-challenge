import React from 'react';

import desktopProfile from '../assets/images/image-profile-desktop.webp';
import tabletProfile from '../assets/images/image-profile-tablet.webp';
import mobileProfile from '../assets/images/image-profile-mobile.webp';

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-center p-4 space-y-8 md:flex-row-reverse md:w-full'>

        <picture className='w-48 -mt-24 md:w-[35%] md:-mt-0'>
          <source media='(min-width: 1024px)' srcSet={desktopProfile} />
          <source media='(min-width: 768px)' srcSet={tabletProfile} />
          <img src={mobileProfile} alt="Image profile" className="w-full" />
        </picture>

        <div className='flex flex-col justify-center items-center text-center p-4 space-y-8 md:items-start md:text-left md:w-1/2'>
          <h1 className='text-4xl font-bold text-white md:text-6xl lg:text-7xl'>Nice to meet you! I'm <span className='border-b-4 border-greenLineColor'>Adam Keyes</span>.</h1>
          <p className='text-base'>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
          <h3 className='uppercase text-1xl text-white font-semibold tracking-widest pb-2 border-b-2 border-greenLineColor md:text-left'>contact me</h3>
        </div>

      </div>
      <div className="h-0.25 bg-white w-full mt-16 "></div>

    </>

  )
}

export default Home;