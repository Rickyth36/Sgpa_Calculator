import React, { useState } from 'react'
import SubInput from './SubInput';

const Hero = () => {
  const [subNo, setSubNo] = useState("");
  const [totalcredit, setTotalCredit] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setSubNo(inputValue);
  };
  
  const handleTotalCreditChange = (event) => {
    const tCreditValue = parseInt(event.target.value);
    setTotalCredit(tCreditValue);
  }

  const subComponents = [];
  for (let i = 1; i <= subNo; i++) {
    subComponents.push(<SubInput title={`SubjectNo.${i}`} id={`SubjectNo${i}`} key={i} />);
  }

  return (
    <div className='p-20'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl md:text-7xl text-white font-sora'>Calculate SGPA now</h1>
        <p className='text-white mt-6 text-md md:text-lg'>All you need is
          <span className='text-green-400'> number of subjects </span>,
          <span className='text-bluee'> grade </span>&
          <span className='text-blue-400'> credit score </span>
          you got in each of them and
          <span className='text-red-400'> Total credit score</span> for the semester
        </p>
      </div>
      <form className='flex flex-col space-y-5 md:flex-row md:space-x-20 md:space-y-0  items-center justify-center'>
        <div>
          <label className='text-md md:text-2xl text-green-400 z-3'>Enter number of subjects</label>
          <div class="input__container w-full">
            <div class="shadow__input"></div>
            <button class="input__button__shadow">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
                <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
              </svg>
            </button>
            <input type="number" className='placeholder:text-sm placeholder:text-green-400' name="number" value={subNo} class="input__search" onChange={handleInputChange} placeholder="Number of subject"/>
          </div>
        </div>

        <div>
          <label className='text-md md:text-2xl text-red-400 z-3'>Enter total credit score</label>
          <div class="input__container w-full">
            <div class="shadow__input"></div>
            <button class="input__button__shadow">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
                <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fill-rule="evenodd" fill="#17202A"></path>
              </svg>
            </button>
            <input type="number" className='placeholder:text-sm placeholder:text-green-400' name="number" value={totalcredit} class="input__search" onChange={handleTotalCreditChange} placeholder="Total credit score"/>
          </div>
        </div>
      </form>

      {/* Render Sub component using for loop */}
      <div className='p-6 mt-8 md:p-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {subComponents}
      </div>
      {subNo>0 ? <button class="codepen-button"><span>Start Coding</span></button> : ""}
    </div>
  );
}

export default Hero