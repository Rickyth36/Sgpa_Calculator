import React, { useState } from 'react'
// import SubInput from './SubInput';
import SubInputNew from './SubInputNew';

const Hero = () => {
  const [subNo, setSubNo] = useState(0);
  const [totalcredit, setTotalCredit] = useState(0);
  const [values, setValues] = useState([])
  // const [sumOProd, setSumOProd] = useState(0);
  const [sgpa, setSgpa] = useState(0);
  const [result, setResult] = useState(false);
  

  const handleSubNoChange = (event) => {
    const inputValue = parseInt(event.target.value);
    let temp = [];
    if (inputValue > 0) {
      for (let i = 0; i < inputValue; i++){
        temp.push({grade: 0, credit: 0})
      }
    }
    setResult(false)
    setSubNo(inputValue)
    setValues(temp)
   // setSubNo(inputValue);
   // setSumOProd(0);
  };
  
  const handleTotalCreditChange = (event) => {
    const tCreditValue = parseInt(event.target.value);
    setTotalCredit(tCreditValue);
    setResult(false)
  }

  // const updateTotalProd = (val) => {
  //   if (isNaN(sumOProd) || isNaN(val)) {
  //     setSumOProd(0)
  //   }
  //     setSumOProd(val)
  // }

  // const showSGPA = () => {
  //   setSumOProd(sumOProd);
  //   if(isNaN(sgpa)){
  //     setSgpa(0)
  //   }
  //   setSgpa(sumOProd / totalcredit);
    
  // }
  
  const subComponents = [];
  for (let i = 0; i < subNo; i++) {
    subComponents.push(<SubInputNew title={`SubjectNo.${i+1}`} id={i} key={i} values={values} setValues={setValues} />);
  }

  const showSGPA = () => {
    // const sgpa = sumOProd / totalcredit;
    if (totalcredit > 0) {
      let sumOfProd = 0;
      for (let item of values) {
        if (item.grade =="" ) {
          alert("Please enter a valid grade")
          return
        }
        if (item.credit === "") {
          alert("Please enter a valid credit")
          return
        }
        sumOfProd += item.grade * item.credit
      }
      const sgpa = sumOfProd / totalcredit;
      setSgpa(sgpa);
      setResult(true);
      
    } else {
      alert("Please enter total credit score")
    }
  }

  console.log("values",values);
  console.log("totalcredit", totalcredit);
  


  return (
    <div className='p-10 md:p-20'>
      <div className='text-center mb-10'>
        <h1 className='text-2xl md:text-7xl font-semibold md:font-normal text-white font-sora'>Calculate your SGPA</h1>
        <p className='text-white mt-6 text-md md:text-lg'>All you need are 
          <span className='text-green-400 underline'> number of subjects </span>,
          <span className='text-blue-400 underline'> grade &</span>
          <span className='text-blue-400 underline'> credit score </span>
          you got in each of them and
          <span className='text-red-400 underline'> total credit score</span> for the semester
        </p>
      </div>
      <form className='flex flex-col space-y-10  md:flex-row md:space-x-20 md:space-y-0  items-center justify-center'>
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
        {
          subComponents
        }
      </div>
      {values.length > 0 ? <button class="codepen-button w-[45%] md:w-52" onClick={showSGPA} ><span className='text-xs'>Calculate SGPA</span></button> : ""}
      {
        result &&  (
          <div>
            {/**<h1 className='text-2xl text-white font-semibold'>{sumOProd}</h1>**/}
            <h1 className='text-2xl mt-5 md:mt-10 text-center text-white font-semibold md:text-5xl'>Your Sgpa is <span className='text-bluee'>{sgpa}</span></h1>
          </div>
        )
      }
    </div>
    
  );
}

export default Hero