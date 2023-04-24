import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import hero from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex py-10 md:flex-row flex-col items-center'
    >
      <div className='flex-1 flex items-center justify-center h-full mt-8'>
        <img
          src={hero}
          alt='hero_img'
          className='md:w-11/12 h-full object-cover'
        />
      </div>

      <div className='flex-1 '>
        <div className='md:text-left text-center md:mt-0 mt-8'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>HELLO!</span>
            <br />
            My Name is <span>Hanzlah Javaid</span>
          </h1>

          <h4
            className='md:text-2xl text-lg md:leading-normal leading-5
           mt-4 font-bold text-gray-500 uppercase'
          >
            FullStack Web Developer
          </h4>

          <a href='#hireme'>
            <button className='btn-primary mt-8 uppercase'>Hire Me</button>
          </a>

          <div
            className='flex items-center md:justify-start justify-center
           mt-8 text-3xl text-gray-500 gap-5'
          >
            <BsFacebook className='cursor-pointer hover:text-white' />
            <AiOutlineInstagram className='cursor-pointer hover:text-white' />
            <AiOutlineTwitter className='cursor-pointer hover:text-white' />
            <AiOutlineGithub className='cursor-pointer hover:text-white' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
