import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersonalDetails } from "./PersonalDetails";
import { ViewDetails } from "./ViewDetails";
import { Address } from "./Address";
// import "./Newform.css";

export const Navigetion = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Address" element={<Address />} />
          <Route path="/ViewDetails" element={<ViewDetails />} />
          <Route path="/" element={<PersonalDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
