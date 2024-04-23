import React from 'react'

const SubInputNew = ({ title, id, values, setValues }) => {
    // const handleGradeChange = (event) => {
    //     console.log("event.target.value",event.target.value);
    //     const arr = [...values];
    //     arr[id].grade = event.target.value ? parseInt(event.target.value) : ""
    //     setValues(arr);
    // }
    const handleGradeChange = (event) => {
        console.log("event.target.value",event.target.value);
        const arr = [...values];
        arr[id].grade = event.target.value ? parseInt(event.target.value) : ""
        setValues(arr);
    }

    const handleCreditChange = (event) => {
        const arr = [...values];
        arr[id].credit = parseInt(event.target.value)
        setValues(arr);
    }

  return (
      <div className='bg-grayy p-5 md:pl-10 rounded-[1rem] md:py-8'>
      <h3 className='text-md md:text-lg font-semibold text-green-400 text-shadow-lg'>{title}</h3>
      <div className='flex flex-col'>
        {/*<label className='text-sm md:text-base text-bluee font-semibold' >Grade</label>
        <input value={values[id].grade} onChange={handleGradeChange} className='rounded-lg border-shadow-lg border border-dark w-full md:w-[70%] p-2 placeholder:text-xs' placeholder='Grade ' type='number'></input>
        */}
        <label for="grade" className='text-sm md:text-base text-blue-400 font-semibold'>Grade:</label>
        <select className='rounded-lg p-2 w-[90%] md:w-[80%]' name="grade" id="grade" onChange={handleGradeChange}>
          <option value="">Choose your grade</option>
          <option value="10">A+</option>
          <option value="9">A</option>
          <option value="8">B+</option>
          <option value="7">B</option>
          <option value="6">C</option>
          <option value="5">D</option>
          <option value="0">F</option>
        </select>
      </div>
      <div className='flex flex-col mt-1 '>
        <label className='text-sm md:text-base text-blue-400 font-semibold' >Credit score</label>
        {/*<input value={values[id].credit} onChange={handleCreditChange} className='rounded-lg border-shadow-lg border border-dark w-[90%] md:w-[80%] p-2 placeholder:text-xs' placeholder='Credit score ' type='number'></input>*/}
        <select className='rounded-lg p-2 w-[90%] md:w-[80%]' name="credit" id="credit" onChange={handleCreditChange}>
          <option value="">Choose credit score</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  )
}

export default SubInputNew