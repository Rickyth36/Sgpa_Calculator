import React, { useState } from 'react'
import SubInput from './SubInput';

const Hero = () => {
  const [subNo, setSubNo] = useState("");
  const [totalcredit, setTotalCredit] = useState("");
  const [sumOProd, setSumOProd] = useState(0);
  const [sgpa, setSgpa] = useState("");
  

  const handleSubNoChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setSubNo(inputValue);
    setSumOProd(0);
  };
  
  const handleTotalCreditChange = (event) => {
    const tCreditValue = parseInt(event.target.value);
    setTotalCredit(tCreditValue);
  }

  const updateTotalProd = (val) => {
    if (isNaN(sumOProd) || isNaN(val)) {
      setSumOProd(0)
    }
      setSumOProd(sumOProd+val)
  }

  const showSGPA = () => {
    setSumOProd(sumOProd);
    if(isNaN(sgpa)){
      setSgpa(0)
    }
    setSgpa(sumOProd / totalcredit);
    
  }
  
  const subComponents = [];
  for (let i = 1; i <= subNo; i++) {
    subComponents.push(<SubInput title={`SubjectNo.${i}`} id={`SubjectNo${i}`} key={i} onProdChange={updateTotalProd} />);
  }

  // const showSGPA = () => {
  //   const sgpa = sumOProd / totalcredit;
  //   console.log(sgpa);
  //   return (
  //     <h1 className='text-2xl text-white font-semibold'>{sgpa}</h1>
  //   )
  // }

  return (
    <div className='p-10 md:p-20'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl md:text-7xl font-semibold md:font-normal text-white font-sora'>Calculate SGPA now</h1>
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
            <input type="number" className='placeholder:text-sm placeholder:text-green-400' name="number" value={subNo} class="input__search" onChange={handleSubNoChange} placeholder="Number of subject"/>
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

      <div className='p-4 mt-8 md:p-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {subComponents}
      </div>
      {subNo > 0 ? <button class="codepen-button" onClick={showSGPA} ><span>Calculate SGPA</span></button> : ""}
      <div>
         {/**<h1 className='text-2xl text-white font-semibold'>{sumOProd}</h1>**/}
         <h1 className='text-2xl text-white font-semibold'>Sgpa: {sgpa}</h1>
         
      </div>
    </div>
  );
}

export default Hero