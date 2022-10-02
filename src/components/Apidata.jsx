import React,{useState,useEffect} from "react"
import axios from "axios";
export const Apidata=()=>{
    const[data,setdata]=useState([]);

    const Getdata=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users")
        setdata(result.data)
        console.log(result.data)
    }
    useEffect(()=>{
        Getdata();
    })
    return(
        <div>
          <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Company</th>
                <th>Website</th>
                <th>Email</th>
                <th>Phone</th>
                <th>UserName</th>
            </tr>
            {data.map((item)=>{
                return(
                
                    <tr>
                         <td>{item.id}</td> 
                        <td>{item.name}</td>
                        <td>{item.address.city}</td>
                        <td>{item.company.name}</td>
                        <td>{item.website}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.username}</td>
                        <button>delete</button>
                    </tr>
                
            )})}
          </table>
        </div>
    )
}