import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Loginpage from "./components/Loginpage";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserLogin from "./components/UserLogin";
import UserDashboard from "./components/UserDashboard";
import ApplyLoan from "./components/ApplyLoan";
import AdminDashboard from "./components/AdminDashboard";
import AddCustomer from "./components/AddCustomer";
import LoginForm from "./components/LoginForm";
import ViewLoans from "./components/ViewLoans";
import ViewItems from "./components/ViewItems";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="userlogin" element={<UserLogin />} />
          <Route path="adminlogin" element={<Loginpage />} />
          <Route path="udashboard" element={<UserDashboard />} />
          <Route path="applyloan" element={<ApplyLoan />} />
          <Route path="adashboard" element={<AdminDashboard />} />
          <Route path="addcustomer" element={<AddCustomer />} />
          <Route path="loginform" element={<LoginForm />} />
          <Route path="viewloans" element={<ViewLoans />} />
          <Route path="viewitems" element={<ViewItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
