import React, { useState } from "react";
import { TextField, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Address = () => {
  const [add, setAdd] = useState({});

  const handleadd = () => {
    sessionStorage.setItem("address", JSON.stringify(add));
  };
  return (
    <div className="main">
      <h1> Address</h1>
      <Card className="card">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <h2>House No</h2>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label=" House NO"
                variant="outlined"
                onChange={(e) => setAdd({ ...add, hno: e.target.value })}
              />
            </Grid>
            <Grid item xs={2}>
              <h2>Street</h2>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label=" Street"
                variant="outlined"
                onChange={(e) => setAdd({ ...add, Str: e.target.value })}
              />
            </Grid>
            <Grid item xs={2}>
              <h2>City</h2>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label=" City"
                variant="outlined"
                onChange={(e) => setAdd({ ...add, city: e.target.value })}
              />
            </Grid>
            <Grid item xs={2}>
              <h2>Pincode</h2>
            </Grid>
            <Grid item xs={10}>
              <TextField
                label=" Pincode"
                variant="outlined"
                onChange={(e) => setAdd({ ...add, pin: e.target.value })}
              />
            </Grid>
            <Grid item xs={2}>
            <Link to="/ViewDetails" className="btn">
              <Button variant="contained" onClick={handleadd}>
                Next
              </Button></Link>
              </Grid >
            <Grid item xs={8}>
            <Link to="/" className="btn">
              <Button variant="contained">Previous</Button>
            </Link></Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
