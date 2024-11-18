import React from 'react';
import Header from '../components/Header';



const Letterpad = () => {
  const letterpad = true;
  return (
     <div>
      <Header letterpad={letterpad} />
      <h1>
        <textarea className='w-full h-screen p-[30px] '  name="" id="" placeholder='Enter Info..'></textarea>
      </h1>
     </div>
)
};

export default Letterpad;