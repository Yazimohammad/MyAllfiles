import React from "react";
import { Child1 } from "./Child1";
export const Child = (props) => {
  return (
    <div>
      <h1>This is Child</h1>
      <p>{props.data}{props.data1}</p>
      <Child1 data={props.data} data1={props.data1} />
    </div>
  );
};
