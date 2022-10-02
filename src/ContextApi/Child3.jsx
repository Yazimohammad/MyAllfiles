import React from "react"
import { Child4 } from "./Child4"
export const Child3=(props)=>{

    return(

        <div>
                <h1>This is Child3</h1>
                <p>{props.data} {props.data1}</p>
                <Child4 data={props.data} data1={props.data1}/>

        </div>
    )
}