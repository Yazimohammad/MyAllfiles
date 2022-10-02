import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar2 } from "./Navbar2";
import { Todo2 } from "./Todo2";
import { Counter2 } from "./Counter2";
import { Api2 } from "./Api2"
import { Apidata } from "./Apidata";

export const Router2 = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/Todo2" element={<Todo2 />} />
          <Route path="/Counter2" element={<Counter2 />} />
          <Route path="/Api2" element={<Api2/>} />
          <Route path = "/" element ={<Apidata/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
