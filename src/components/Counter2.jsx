import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { color } from "@mui/system";

export const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleadd = () => {
    count < 30 && setCount(count + 1);
    if(count===30){setCount(count-30)}
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <button variant="contained" onClick={handleadd}>
                ADD
              </button>
              <h1>Count:-{count}</h1>
              <button
                variant="contained"
                onClick={() => count > 0 && setCount(count - 1)}
              >
                CANCLE
              </button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
