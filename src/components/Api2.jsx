import React, { useState, useEffect } from "react";

export const Api2 = () => {
  const [data, setData] = useState([]);
  const getdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="yazi">
      <h1>Details</h1>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>City</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.emal}</td>
            <td>{item.address.city}</td>
            <button>Delete</button> 
          </tr>
        ))}
      </table>
    </div>
  );
};
