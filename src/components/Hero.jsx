import React, { useState } from 'react'
import SubInput from './SubInput';

const Hero = () => {
 const [subNo, setSubNo] = useState(1);

  // Function to handle input change
  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setSubNo(inputValue);
  };

  const subComponents = [];
  for (let i = 0; i < subNo; i++) {
    subComponents.push(<SubInput key={i} />);
  }

  return (
    <div className='p-12'>
    <h1 className='text-[2.5rem]'>This is heading</h1>
      <form className=''>
        <div class="input__container">
          <div class="shadow__input"></div>
          <button class="input__button__shadow">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
              <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
            </svg>
          </button>
          <input type="number" name="number" value={subNo} class="input__search" onChange={handleInputChange} placeholder="What do you want to search?"/>
        </div>
      </form>

      {/* Render Sub component using for loop */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {subComponents}
      </div>
    </div>
  );
}

export default Hero