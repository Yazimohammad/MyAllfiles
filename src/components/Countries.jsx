import React,{useEffect} from 'react'
import axios from 'axios'

export const Countries=()=>{

    const getdata=()=>{
        const result= axios.get("https://restcountries.com/v3.1/all")
        console.log(result)

    }
    useEffect=(()=>{
        getdata()
    },[])

    return(

        <div>
        
        <label>Contenent</label>
        <select>
            <option>Select</option>
        </select>
        <label>States</label>
        <select>
            <option>Select</option>
        </select>
        <label>City</label>
        <select>
            <option>Select</option>
        </select>

        </div>
    )
}