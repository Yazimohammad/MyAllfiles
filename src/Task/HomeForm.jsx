import React from "react";
import { Grid, TextField, Checkbox, Button } from "@mui/material";

import "./Form1.css";

const HomeForm = () => {
  return (
    <div>
      <h1 className="pheading">Job Application</h1>
      <marquee>
        <h5 className="marqu">Please Fill All Details Carefully.</h5>
      </marquee>
      <Grid>
        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Personal Details</h1>
          </Grid>
          <Grid xs={12}>
            <select className="selected">
              <option value="">Please Select</option>
              <option value=" Mr">Mr.</option>
              <option value="Miss">Miss.</option>
              <option value="Mrs">Mrs.</option>
            </select>
          </Grid>
          <TextField
            required
            label="First Name"
            defaultValue="First Name"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Middel Name"
            defaultValue="Middel Name"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Last Name"
            defaultValue="Last Name"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Date Of Birth"
            defaultValue="insert"
            type="date"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Email"
            defaultValue="insert"
            type="email"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Mobile"
            defaultValue="insert"
            type="number"
            sx={{ m: 3, width: "45ch" }}
          />
          <Button variant="contained" className="btn1">
            Save
          </Button>
          console.log(fnm)
        </Grid>
        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Address Details</h1>
          </Grid>
          <Grid xs={12}>
            <Checkbox id="permanant" />
            Permanant
          </Grid>
          <TextField
            required
            label="House No"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Building Name"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Street"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="City"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="State"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Pincode"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <Grid xs={12}>
            <Checkbox label="residential" />
            Residential
          </Grid>
          <TextField
            required
            label="House No"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Building Name"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Street"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="City"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="State"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <TextField
            required
            label="Pincode"
            defaultValue="insert"
            sx={{ m: 3, width: "45ch" }}
          />
          <Button variant="contained" className="btn1">
            Save
          </Button>
        </Grid>
        <Grid container className="prsnlcontainer">
          <Grid xs={12} className="prsnlHeading">
            <h1>Education Details</h1>
          </Grid>
          <div className="edctndiv">
            <TextField
              required
              label="SSC"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <Button variant="contained" className="btn">
              Save
            </Button>

            <TextField
              required
              label="HSC"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <Button variant="contained" className="btn">
              Save
            </Button>

            <TextField
              required
              label="Degree"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="University"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Percentage"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <TextField
              required
              label="Passing Year"
              defaultValue="insert"
              sx={{ m: 1, width: "30ch" }}
            />
            <Button variant="contained" className="btn">
              Save
            </Button>
          </div>
        </Grid>
        <Button variant="contained" color="success" className="btnsubmit">
          Submit
        </Button>
        <Button variant="contained" color="error" className="btncancel">
          Cancel
        </Button>
      </Grid>
    </div>
  );
};

export default HomeForm;
