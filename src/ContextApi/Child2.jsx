import React from "react"
import { Child3 } from "./Child3"
export const Child2=(props)=>{

    return(

<div>
    <h1>This Is Child2</h1>
    <p>{props.data}{props.data1}</p>
    <Child3 data={props.data} data1={props.data1}/>
</div>

    )
}