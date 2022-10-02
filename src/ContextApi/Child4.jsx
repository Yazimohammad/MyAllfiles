import React, { useContext } from "react";
import { sendData } from "../App";

export const Child4 = () => {

    const result=useContext(sendData)
    console.log(Child4,result)
  return (

<div>
<h1> This is Child 4</h1>
<h1>{result}</h1>

</div>

  )
};
