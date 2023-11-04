import React, { useState } from 'react';
import {
  DashboardOutlined,
  SettingOutlined,
  CopyrightOutlined,
  ApartmentOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Devices', '2', <ApartmentOutlined />),
  getItem('Dashboard', '3', <DashboardOutlined />),
  getItem('Settings', '4', <SettingOutlined />),
];
const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: "end",
            fontStyle: 'italic',
            fontWeight:'bold'
          }}
        >  <Avatar
      style={{
        backgroundColor: '#87d068',
      }} size={40}
      src={'https://robohash.org/200.68.163.202.png'}
          />{' '}Welcome Damian!</Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}

            items={[{
              title: 'Home',
            }]}
          >
            
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            // height: '5px',
          }}
        >
          IoT Solutions <CopyrightOutlined /> { new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default HomeLayout;