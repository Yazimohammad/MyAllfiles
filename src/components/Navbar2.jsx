import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
export const Navbar2 = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
                <Link to = "/Todo2">Todo</Link>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={3}>
          <Card>
            <CardContent>
                <Link to = "/Counter2">Counter</Link>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={3}>
          <Card>
            <CardContent>
                <Link to = "/Api2">Api</Link>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={3}>
          <Card>
            <CardContent>
                <Link to = "/">ApiData</Link>
            </CardContent>
          </Card>
          </Grid>
      </Grid>
    </div>
  );
};
