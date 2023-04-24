import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className='mt-3 text-gray-400 text-md'>My knowledge</p>

        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <AiFillHtml5 />
              </div>
            </div>

            <p className='text-xl mt-3'>HTML 5</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiCss3 />
              </div>
            </div>

            <p className='text-xl mt-3'>CSS 3</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiTailwindcss />
              </div>
            </div>

            <p className='text-xl mt-3'>TAILWIND CSS</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiBootstrap />
              </div>
            </div>

            <p className='text-xl mt-3'>BOOTSTRAP</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiJavascript />
              </div>
            </div>

            <p className='text-xl mt-3'>JAVASCRIPT</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiReact />
              </div>
            </div>

            <p className='text-xl mt-3'>REACT JS</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <FaNodeJs />
              </div>
            </div>

            <p className='text-xl mt-3'>NODE JS</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiExpress />
              </div>
            </div>

            <p className='text-xl mt-3'>EXPRESS JS</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiMongodb />
              </div>
            </div>

            <p className='text-xl mt-3'>MONGODB</p>
          </div>

          <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[13.4rem] flex flex-col items-center justify-center bg-gray-900 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full border-8 border-cyan-600'>
              <div className='text-6xl h-28 w-28 rounded-full bg-gray-900 flex items-center justify-center hover:text-cyan-600'>
                <SiRedux />
              </div>
            </div>

            <p className='text-xl mt-3'>REDUX/TOOLKIT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
