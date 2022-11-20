import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Register from "./Registration";
import Signin from "./Login";

import FormikComponent from "./adminlogin"
import Seats from "./Seats";
import Ticket from "./Ticket";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/mainpage" element={<Header />} />
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<FormikComponent/>} />
          <Route path="/seat" element={<Seats/>} />
          <Route path="/ticket" element={<Ticket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
