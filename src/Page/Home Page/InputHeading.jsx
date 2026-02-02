import React, { useRef } from 'react'


export default function InputHeading({setNumber}) {
    const count=useRef();

    const Clickbtn=()=>{
       let Number=count.current.value;
        setNumber(Number);

    }
  return (
    <div className='input-heading'>
        <h4>Enter Total Course : </h4>
        <div className='head-box'>
        <input type="text" className='form-control w-75'  ref={count}/>
        <button className='btn btn-primary' onClick={Clickbtn}> Click</button>
        </div>
    </div>
  )
}
