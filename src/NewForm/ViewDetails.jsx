import React from "react";
import { TextField, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ViewDetails = () => {
  const result = JSON.parse(sessionStorage.getItem("personal"));
  const result1 = JSON.parse(sessionStorage.getItem("address"));

  return (
    <div className="main">
      <h1>View Details</h1>
      <Card>
        <CardContent>
          <h3>{result.fname}.{result.Mname}.{result.lname}</h3>
          <h3> Date of Birth:{result.DoB}</h3>
          <h3> Email:{result.Eaddress}</h3>
          <h3>{result1.hno}</h3>
          <h3>{result1.str}</h3>
          <h3>{result1.city}</h3>
          <h3>{result1.pin}</h3>

          <Link to="/Address" className="btn">
            <Button variant="contained">Previous</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
