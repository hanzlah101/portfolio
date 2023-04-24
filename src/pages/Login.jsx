import React, { useState } from 'react';
import { IoMdMail } from 'react-icons/io';
import { FiKey } from 'react-icons/fi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold flex items-center justify-center mb-16'>
        SIGN IN WITH YOUR EMAIL ID
      </h1>

      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center'>
          <div className='text-gray-800 flex relative items-center justify-center'>
            <IoMdMail className='text-gray-400 text-2xl absolute left-4 ml-1' />
            <input
              className='rounded-full sm:w-[100%] w-[95%] px-14 py-3 outline-none focus:placeholder-gray-600'
              type='email'
              placeholder='Email'
              required
            />
          </div>
        </div>

        <div className='flex items-center justify-center mt-8'>
          <div className='text-gray-800 flex relative items-center justify-center'>
            <FiKey className='text-gray-400 text-2xl absolute left-4 ml-1' />
            <input
              className='rounded-full sm:w-[100%] w-[95%] px-14 py-3 outline-none focus:placeholder-gray-600'
              type={show ? 'show' : 'password'}
              placeholder='Password'
              required
            />

            {!show ? (
              <AiFillEye
                onClick={() => setShow(!show)}
                className='text-gray-600 text-2xl absolute sm:right-4 right-7 ml-3 cursor-pointer hover:text-gray-900'
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setShow(!show)}
                className='text-gray-600 text-2xl absolute sm:right-4 right-7 ml-3 cursor-pointer hover:text-gray-900'
              />
            )}
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <button className='btn-primary mt-12'>SIGN IN</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
