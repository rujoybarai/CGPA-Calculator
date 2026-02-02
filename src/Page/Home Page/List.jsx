import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function List({ Number, setDetails ,setNumber}) {
  const [rows, setrows] = useState([]
  );

 

  useEffect(()=>(

    setrows( Array.from({ length: Number }, () => ({ CGPA: "", Credit: "" })))

  ),[Number]);


  const HandleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    setrows(newRows);
  };

  const Submit = () => {
    setDetails(rows);
    setNumber(0);
    
  };

  return (
    <>
      {rows.map((row, i) => (
        <div className="Details-box" key={i}>
          <span className="D-number text-center">{i + 1}</span>
          <input
            type="text"
            className=" form-control"
            placeholder="Enter CGPA"
            id="Input1"
            onChange={(e) => HandleChange(i, "CGPA", e.target.value)}
            value={row.CGPA}
          />
          <input
            type="text"
            className=" form-control"
            placeholder="Enter course credit"
            id="Input2"
            onChange={(e) => HandleChange(i, "Credit", e.target.value)}
            value={row.Credit}
          />
        </div>
      ))}

      <div id="L-btn">
        <button className="btn btn-success  " onClick={Submit}>
          Submit
        </button>
      </div>
    </>
  );
}
