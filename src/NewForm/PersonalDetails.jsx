import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Newform.css";
export const PersonalDetails = () => {
  const [data, setData] = useState({});
  console.log(data);

  const handlebtn = () => {
    sessionStorage.setItem("personal", JSON.stringify(data));
  };
  return (
    <div className="main">
      <h1>PersonalDetails</h1>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <h2>First Name</h2>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label=" First Name"
                variant="outlined"
                onChange={(e) => setData({ ...data, fname:e.target.value })}
              />
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
            <Grid item xs={4}>
              <h2>Middle Name</h2>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label=" Middle Name"
                variant="outlined"
                onChange={(e) => setData({ ...data, Mname: e.target.value })}
              />
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
            <Grid item xs={4}>
              <h2>Last Name</h2>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label=" Last Name"
                variant="outlined"
                onChange={(e) => setData({ ...data, lname: e.target.value })}
              />
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
            <Grid item xs={4}>
              <h2>Date of Birth</h2>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label=" Date Of Birth"
                variant="outlined" type="date"
                onChange={(e) => setData({ ...data, DoB: e.target.value })}
              />
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
            <Grid item xs={4}>
              <h2>Email Address</h2>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label=" Email Adress"
                variant="outlined" 
                onChange={(e) => setData({ ...data, Eaddress: e.target.value })}
              />
            </Grid>
            {/* <Grid item xs={6}></Grid> */}
            <Link to="/Address" className="btn">
              <Button variant="contained" onClick={handlebtn}>
                Next
              </Button>
            </Link>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
