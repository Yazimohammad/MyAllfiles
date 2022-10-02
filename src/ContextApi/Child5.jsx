import React,{useContext} from "react"
import {sendData} from "../App"
export const Child5=()=>{

const result=useContext(sendData)
console.log(Child5,result)
return(

    <div>
        <h1>This is Child5</h1>
        <h1> {result}</h1>
    </div>
)

}