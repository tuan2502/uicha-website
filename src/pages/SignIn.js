import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { PinteredOutLined, home, signup } from "../components/Icons/Icons";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


const navitems = [
  {
    label: (
      <Link to="/">
        {home}
        <span> Trang chủ</span>
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link to="/sign-up">
        {signup}
        <span> Đăng ký</span>
      </Link>
    ),
    key: "2",
  },
];

const menu = [
  {label: 'Doanh nghiệp', key: '1'},
  {label: 'Về chúng tôi', key: '2'},
  {label: 'Đội ngũ', key: '3'},
  {label: 'Sản phẩm', key: '4'},
  {label: 'Blogs', key: '5'},
  {label: 'Giá cả', key: '6'},
]

const media = [
  {label: <Link to="#">{<DribbbleOutlined />}</Link>, key: '1'},
  {label: <Link to="#">{<TwitterOutlined />}</Link>, key: '2'},
  {label: <Link to="#">{<InstagramOutlined />}</Link>, key: '3'},
  {label: <Link to="#">{<PinteredOutLined />}</Link>, key: '4'},
  {label: <Link to="#">{<GithubOutlined />}</Link>, key: '5'},
]
export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout className="layout-default layout-signin">
          <Header>
            <div className="header-col header-brand">
              <h5>UICHA</h5>
            </div>
            <div className="header-col header-nav">
              <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={navitems}/>
                
            </div>
          </Header>
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Đăng nhập</Title>
                <Title className="font-regular text-muted" level={5}>
                  Nhập tài khoản và mật khẩu email của bạn!
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Mật khẩu"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input placeholder="Mật khẩu" />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Nhớ tài khoản
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      ĐĂNG NHẬP
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/sign-up" className="text-dark font-bold">
                      Đăng ký
                    </Link>
                  </p>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src={signinbg} alt="" />
              </Col>
            </Row>
          </Content>
          <Footer>
            <Menu mode="horizontal" items={menu} />
            <Menu mode="horizontal" className="menu-nav-social" items={media} />
            <p className="copyright">
              {" "}
              Copyright © 2023 UICHA by <a href="#pablo">Uicha Team</a>.{" "}
            </p>
          </Footer>
        </Layout>
      </>
    );
  }
}
