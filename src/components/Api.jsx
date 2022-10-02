import axios from "axios"
import React from "react"
import { useEffect } from "react"

export const Api=()=>{

 const getdata=async()=>{
  const result= await axios.get("https://fakestoreapi.com/products")
  console.log(result);
 }

useEffect(()=>{
  getdata()
},[])







  return(
    <div>
      <h1>api data</h1>
      {Data.map((item)=>{
        return(
          <div>
            <h1>{item.title}</h1>
            <h1>{item.id}</h1>
          </div>
        )
      })}
    </div>
  )
}