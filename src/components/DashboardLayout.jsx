import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  SettingOutlined,
  CopyrightOutlined,
  ApartmentOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar,  Button, Card, Divider } from 'antd';






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
const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  

  const {
    token: colorBgContainer ,
  } = theme.useToken();
  return (
    <Layout
      style={{
            //   minHeight: '100vh',
          
      }}
      >
          
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='dark'>
        
        <div className="demo-logo-vertical" > 
          
          </div>
     
        <br />
        <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" items={items} />
        
      </Sider>
      <Layout>
        <Header
          style={{
            
            background: colorBgContainer,
            textAlign: "end",
            fontStyle: 'italic',
                      fontWeight: 'bold',
            color:'white'
             
          }}
              >
                  <Avatar
      style={{
        backgroundColor: '#87d068',
      }} size={40}
      src={'https://robohash.org/200.68.163.202.png'}
          />{' '}Welcome Damian!</Header>
        <Content
          style={{
                      //   margin: '0 16px',
              padding:10,
                 
          }}
        >
          <Breadcrumb
            style={{
                          margin: '16px 0',
                
                          
            }}

            items={[{
              title:'',
            }]}
          >
           
                  </Breadcrumb>
                   <Divider orientation='left'>Dashboard</Divider>
          <div
                      style={{
                margin:10,
              padding: 1,
              minHeight: 720,
            //   background: colorBgContainer,
            }}
          ><Card
                          title="Encendido Bomba 1"
                          hoverable
    bordered={true}
    style={{
        width: 300,
        margin: 10,
       
        textAlign:'center'
    }}
  >
    <Button>on /off</Button>
  </Card>
                      
          </div>
        </Content>
        <Footer
          style={{
                      textAlign: 'center',
                      background: 'darkblue',
              color:'white'
            
          }}
        >
          IoT Solutions <CopyrightOutlined /> { new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default HomeLayout;