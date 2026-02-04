import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import InputHeading from './InputHeading'
import List from './List';
import CGPA from './CGPA';



export default function Home() {

    const [Number,setNumber]=useState(null);
   const[Details,setDetails]=useState([]);

   const[Result,setResult]=useState(null);
 



const Calculation =()=>{


     let TotalCredit =0;
     let SumCGPA=0;
    
   Details.forEach(item => {
    const cgpa = parseFloat(item.CGPA)||0;
    const  Credit =parseFloat(item.Credit)||0;

    SumCGPA+=cgpa*Credit;
    TotalCredit+=Credit;
    
   });

   return (SumCGPA / TotalCredit).toFixed(2);

};



useEffect(() => {
  const res = Calculation();
  if (res && !isNaN(res)) {
    setResult(res);
  } else {
    setResult(null);
  }
}, [Details]);


console.log(Result);
  return (
    <Layout>
      {Result !== null && <CGPA CGPA={Result} setResult={setResult} setNumber={setNumber}/>}
     <div className='Conatner'>
      <h2 className='text-center mt-1'>CGPA Calculator</h2>
      <div >
       <InputHeading setNumber={setNumber}/>
       {Number !== null && <List Number={Number} Details={Details} setDetails={setDetails} setNumber={setNumber} />}
      </div>
     </div>
    </Layout>
  )
}
