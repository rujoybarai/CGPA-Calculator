import React from 'react'

export default function CGPA({CGPA,setResult,setNumber}) {
    const Resetbtn =()=>{
    setNumber(null);
    setResult(null);

  }
  return (
    <>
      <div className='Class-Box'>
       <h2>CGPA: <span>{CGPA}</span> </h2>
    </div>
    <div id="L-btn">
      <button  className="btn btn-danger  " onClick={Resetbtn}>
          Reset
      </button>
      </div>
    </>
  )
}
