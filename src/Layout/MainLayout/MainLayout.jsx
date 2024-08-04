
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

import { NavLink, Outlet } from 'react-router-dom';
import sidebarRoute from '../../Route/sidebarRoute';
const { Header, Content,  Sider } = Layout;
// NavBar
const items1 = ['Home', 'About us', 'Login'].map((key) => ({
    key,
    label: `${key}`,
  }));
  // SideNav
  const items2 = sidebarRoute.map((nav, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: <NavLink to={`/${nav.path}`}>{nav.name}</NavLink>,
      // icon: React.createElement(icon),
      // children: new Array(4).fill(null).map((_, j) => {
      //   const subKey = index * 4 + j + 1;
      //   return {
      //     key: subKey,
      //     label: `option${subKey}`,
      //   };
      // }),
    };
  });

const MainLayout = () => {
 
  return (
    <Layout>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent:'center',
        }}
      />
    </Header>
    <Layout>
      <Sider
        width={200}
        style={{
          height :"100vh"
          // background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: '100vh',
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}
export default MainLayout