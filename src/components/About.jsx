import React from 'react';
import cv from '../assets/Code_a_program.pdf';
import aboutImg from '../assets/images/about.png';

const About = () => {
  const info = [
    { text: 'Years Experience', count: '01' },
    { text: 'Completed Projects', count: '06' },
    { text: 'Companies Work', count: '03' },
  ];

  return (
    <section id='about' className='text-white py-10'>
      <div className='text-center lg:mt-8 md:mt-[-130px]'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 font-semibold font 2xl'>
          My introduction
        </p>

        <div
          className='flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10
         items-center max-w-6xl mx-auto'
        >
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}
                      <span className='text-cyan-600'>+</span>
                    </h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={cv} download>
                <button className='btn-primary'>Download CV</button>
              </a>
            </div>
          </div>

          <div className='flex-1 flex justify-center items-center md:mt-0 mt-1'>
            <div
              className='lg:w-96 h-full relative 
            sm:w-10/12 w-11/12 max-w-sm aboutImg'
            >
              <img
                className='w-full object-cover bg-cyan-600 rounded-xl'
                src={aboutImg}
                alt='about_img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
