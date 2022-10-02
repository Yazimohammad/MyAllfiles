import React, { useState } from "react";

const UseState = () => {
  const [couter, setCouter] = useState(0);

  return (
    <div>
      <h1>this is use State</h1>
      <h2> state :{couter} </h2>

      <button onClick={() => setCouter(couter + 2)}> Add </button>
    </div>
  );
};

export default UseState;
