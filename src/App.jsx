import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Verify from "./components/Pages/Verify";
import Page404 from "./components/Pages/Page404";
import AuthRegister from "./components/Pages/Auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/auth/register" element={<AuthRegister />}></Route>
        <Route exact path="/verify" element={<Verify />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
