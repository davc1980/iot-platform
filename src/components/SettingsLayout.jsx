import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  SettingOutlined,
  CopyrightOutlined,
  ApartmentOutlined,
  UserOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar, Image, Space } from 'antd';
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
  getItem((<Link to={'/'} >Home</Link>), '1', <HomeOutlined />),
  getItem((<Link to={'/devices'} >Devices</Link>), '2', <ApartmentOutlined />),
  getItem((<Link to={'/dashboard'} >Dashboard</Link>), '3', <DashboardOutlined />),
  getItem((<Link to={'/settings'} >Settings</Link>), '4', <SettingOutlined />),
  getItem((<Link to={'/logout'} >Log Out</Link>), '5', <LogoutOutlined />),
];
const DevicesLayout = () => {
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
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
        
        <div className="demo-logo-vertical" > 
          <Image style={{ textAlign: 'center', padding: '15px' }} src='https://iot-solutions.com.mx/img/Logo_iot_iotsolutions.JPG' preview={false} />
          </div>
     
        <br />
        <Menu theme="light" defaultSelectedKeys={['4']} mode="inline" items={items} />
        
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
              title: 'Settings',
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
            <h1>This is the Settings Page</h1>
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
export default DevicesLayout;