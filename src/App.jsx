import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
// Login, Register, Verify, Page404, Auth
import { AuthProvider } from "./components/utils/Auth";
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
import RequireAuth from "./components/utils/RequireAuth";
import Authenticated from "./components/utils/Authenticated";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/auth/register" element={<AuthRegister />}></Route>
        <Route exact path="/verify" element={<Verify />}></Route>

        <Route
          exact
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route
          exact
          path="/transactions"
          element={
            <RequireAuth>
              <Transactions />
            </RequireAuth>
          }
        ></Route>
        <Route
          exact
          path="/groups"
          element={
            <RequireAuth>
              <Groups />
            </RequireAuth>
          }
        ></Route>
        <Route
          exact
          path="/subscriptions"
          element={
            <RequireAuth>
              <Subscription />
            </RequireAuth>
          }
        ></Route>
        <Route
          exact
          path="/reports"
          element={
            <RequireAuth>
              <Reports />
            </RequireAuth>
          }
        ></Route>
        <Route
          exact
          path="/setting"
          element={
            <RequireAuth>
              <Setting />
            </RequireAuth>
          }
        ></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
