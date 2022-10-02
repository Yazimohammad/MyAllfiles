import React from "react"
import {Child} from "./Child"

export const Parents=(props)=>{
return(  
    <div>
        <h1>This is Parenst</h1>
        <Child data={props.data} data1={props.data1}/>
    </div>
)
    
}
