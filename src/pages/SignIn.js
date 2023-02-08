import React, { Component } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
} from "antd";

import logo3 from "../assets/images/Google__G__Logo.svg.png";

import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { PinteredOutLined, Home } from "../components/Icons";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const navitems = [
  {
    label: (
      <Link to="/">
        <Home />
        <span> Home</span>
      </Link>
    ),
    key: "1",
  },
];

const menu = [
  { label: "Company", key: "1" },
  { label: "About Us", key: "2" },
  { label: "Teams", key: "3" },
  { label: "Products", key: "4" },
  { label: "Blogs", key: "5" },
  { label: "Pricing", key: "6" },
];

const media = [
  { label: <Link to="#">{<DribbbleOutlined />}</Link>, key: "1" },
  { label: <Link to="#">{<TwitterOutlined />}</Link>, key: "2" },
  { label: <Link to="#">{<InstagramOutlined />}</Link>, key: "3" },
  { label: <Link to="#">{<PinteredOutLined />}</Link>, key: "4" },
  { label: <Link to="#">{<GithubOutlined />}</Link>, key: "5" },
];

export default class SignUp extends Component {
  render() {
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">
          <Header>
            <div className="header-col header-brand">
              <h5>UICHA</h5>
            </div>
            <div className="header-col header-nav">
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={navitems}
              />
            </div>
          </Header>

          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Sign In</Title>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              bordered="false"
            >
              <div className="sign-up-gateways">
                <Button type="false">
                  <img src={logo3} alt="logo 3" />
                  <span>Sign in with Google</span>
                </Button>
              </div>
            </Card>
          </Content>
          <Footer>
            <Menu mode="horizontal" items={menu} />
            <Menu mode="horizontal" className="menu-nav-social" items={media} />
            <p className="copyright">
              {" "}
              Copyright © 2023 UICHA by <a href="#pablo">Uicha Team</a>.{" "}
            </p>
          </Footer>
        </div>
      </>
    );
  }
}
