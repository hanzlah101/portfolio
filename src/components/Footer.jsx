import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-gray-800 text-sm p-4 text-center text-white'>
      Copyright <span className='font-bold'>©</span>
      <span className='font-bold'> {year} Hanzlah Javaid.</span> All Rights
      reserved.
    </div>
  );
};

export default Footer;
