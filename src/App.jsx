import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
// Login, Register, Verify, Page404, Auth
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Verify from "./components/Pages/Verify";
import Page404 from "./components/Pages/Page404";
import AuthRegister from "./components/Pages/Auth/Register";
// Dashboard, Transaction, Groups, Subscription, Reports, Setting
import Dashboard from "./components/Pages/Dashboard";
import Transactions from "./components/Pages/Transactions";
import Groups from "./components/Pages/Groups";
import Subscription from "./components/Pages/Subscription";
import Reports from "./components/Pages/Reports";
import Setting from "./components/Pages/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/auth/register" element={<AuthRegister />}></Route>
        <Route exact path="/verify" element={<Verify />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/transactions" element={<Transactions />}></Route>
        <Route exact path="/groups" element={<Groups />}></Route>
        <Route exact path="/subscriptions" element={<Subscription />}></Route>
        <Route exact path="/reports" element={<Reports />}></Route>
        <Route exact path="/setting" element={<Setting />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
