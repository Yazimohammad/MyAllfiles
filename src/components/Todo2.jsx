import React, { useState } from "react";

export const Todo2 = () => {
  const [txt, setTxt] = useState("");
  const [add, setAdd] = useState([]);
  const handleadd = () => {
    setAdd([...add, txt]);
    setTxt("");
  };
  const handledelete=(i)=>{
    const result = add.filter((item, ind) => ind !== i);
    setAdd(result);
  }
 
  
  return (
    <div>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button onClick={handleadd}>Add</button>

      {add.map((item,i) => {
        return (
            
        <h1 onClick={()=>handledelete(i)}>{item}</h1>
        )
      })}
    </div>
  );
};
