import React from 'react'
import { useState } from 'react';
const SubInput = ({ title, id, onProdChange }) => {
  const [grade, setGrade] = useState(0);
  const [credit, setCredit] = useState(0);
  const [prod, setProd] = useState(0);
  function handleGradeChange(event) {
    const gradeValue = parseInt(event.target.value);
    if (isNaN(gradeValue) || gradeValue===null ) {
      setGrade(0);
      setProd(0);
      onProdChange(0);
    }
      setGrade(gradeValue);
      setProd(gradeValue * credit);
      onProdChange(gradeValue * credit);
  }
  function handleCreditChange(event) {
    const creditValue = parseInt(event.target.value);
    if (isNaN(creditValue) || creditValue===null ) {
      setCredit(0);
      setProd(0);
      onProdChange(0);
      
    }
      setCredit(creditValue);
      setProd(grade * creditValue);
      onProdChange(grade * creditValue);
  }

  console.log("grade",grade);
  console.log("credit",credit);
  console.log("prod",prod);
  return (
    <div className='bg-grayy p-5 rounded-lg w-full'>
      <h3 className='text-md md:text-lg font-semibold text-green-400 text-shadow-lg'>{title}</h3>
      <div className='flex flex-col'>
        <label for={id} className='text-sm md:text-base text-bluee font-semibold' >Grade</label>
        <input onChange={handleGradeChange} className='rounded-lg border-shadow-lg border border-dark w-full md:w-[70%] p-2 placeholder:text-xs' id={id} placeholder='Grade ' type='number'></input>
      </div>
      <div className='flex flex-col mt-1'>
        <label for={id} className='text-sm md:text-base text-blue-400 font-semibold' >Credit score</label>
        <input onChange={handleCreditChange} className='rounded-lg border-shadow-lg border border-dark w-full md:w-[70%] p-2 placeholder:text-xs' id={id} placeholder='Credit score ' type='number'></input>
      </div>
      <p>{ prod}</p>
    </div>
  )
}

export default SubInput