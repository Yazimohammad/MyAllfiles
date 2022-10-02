import React from "react"
import { Child2 } from "./Child2"

export const Child1=(props)=>{


    return(

    <div>
    <h1>This is Child1 </h1>
    <p>{props.data}{props.data1}</p>
    <Child2 data={props.data}/>
    </div>
    )
}