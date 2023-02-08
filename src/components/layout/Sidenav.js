// import { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Billing, Customer, Dashboard, Profile, Signin, Signup } from "../Icons";

const Sidenav = (color) => {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const items = [
    {
      label: (
        <NavLink to="/dashboard">
          <span
            className="icon"
            style={{
              background: page === "dashboard" ? color : "",
            }}
          >
            {/* {dashboard} */}
            <Dashboard/>
          </span>
          <span className="label">Dashboard</span>
        </NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <NavLink to="/customers">
          <span
            className="icon"
            style={{
              background: page === "customers" ? color : "",
            }}
          >
            <Customer/>
          </span>
          <span className="label">Customers</span>
        </NavLink>
      ),
      key: "2",
    },
    {
      label: (
        <NavLink to="/billing">
          <span
            className="icon"
            style={{
              background: page === "billing" ? color : "",
            }}
          >
            <Billing/>
          </span>
          <span className="label">Billing</span>
        </NavLink>
      ),
      key: "3",
    },
    // {
    //   label: (
    //     <NavLink to="/rtl">
    //       <span
    //         className="icon"
    //         style={{
    //           background: page === "rtl" ? color : "",
    //         }}
    //       >
    //         {rtl}
    //       </span>
    //       <span className="label">RTL</span>
    //     </NavLink>
    //   ),
    //   key: "4",
    // },
    { label: "Account Pages", key: "5" },
    {
      label: (
        <NavLink to="/profile">
          <span
            className="icon"
            style={{
              background: page === "profile" ? color : "",
            }}
          >
            <Profile/>
          </span>
          <span className="label">Profile</span>
        </NavLink>
      ),
      key: "6",
    },
    {
      label: (
        <NavLink to="/sign-in">
          <span className="icon"><Signin/></span>
          <span className="label">Sign In</span>
        </NavLink>
      ),
      key: "7",
    },
  ];

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span>UICHA Dashboard</span>
      </div>
      <hr />
      <Menu items={items} theme="light" mode="inline" />
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            SIGN OUT
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
