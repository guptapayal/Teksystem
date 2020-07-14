import React from 'react';
import {Layout, Breadcrumb, Row, Col} from 'antd';
import { DashboardOutlined,CreditCardOutlined,DatabaseOutlined,UsergroupAddOutlined,LogoutOutlined,QuestionCircleOutlined,SettingOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
const {Header, Sider, Content} = Layout;
const style1 ={fontSize:'40px'}
function App() {
  return (
    <div className="App">
      <Layout>
      <Header className='header'>BitcoinWallet - Admin Panel</Header>
      <Layout className='body'>
      <Sider className='sider'>
        <ul type='none'> 
          <li><DashboardOutlined />Dasboard</li>
          <li><CreditCardOutlined />Transact</li>
          <li><DatabaseOutlined />Block io Api Keys</li>
          <li><UsergroupAddOutlined />User</li>
          <li><QuestionCircleOutlined />FAQ</li>
          <li><SettingOutlined />Web Settings</li>
          <li><LogoutOutlined />Logout</li>
        </ul>
      </Sider>
      <Content className='content'>
        <Breadcrumb className='breadcrumb'>
          <Breadcrumb.Item>BitcoinWallet Adminstrator</Breadcrumb.Item>
          <Breadcrumb.Item>Dasboard</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={{background: '#0092ff', padding: '8px 0', color:'white',marginLeft: '8%',height:'120px',paddingLeft: '8%',fontSize: '16px'}}>User
        <div style={style1}>1</div>
        <img src=''/>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{background: 'rgb(255, 71, 0)', padding: '8px 0', color:'white',marginLeft: '8%',height:'120px',paddingLeft: '8%',fontSize: '16px'}}>Wallet Address
        <div style={style1}>8</div>
        <img src=''/>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{background: 'rgba(8, 76, 126, 0.92)', padding: '8px 0', color:'white',marginLeft: '8%',height:'120px',paddingLeft: '8%',fontSize: '16px'}}>Total BTC in Website
        <div style={style1}>0.0020000</div>
        <img src=''/>
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div style={{background: 'orange', padding: '8px 0', color:'white',marginLeft: '8%',height:'120px',paddingLeft: '8%',fontSize: '16px'}}>Your Profit
        <div style={{fontSize:'35px'}}>0.000800 BTC</div>
        <img src=''/>
        </div>
      </Col> 
    </Row>
    <div className='transList'>
      <header>Latest Tansactions</header>
      <div style={{}}>

      </div>
    </div>
      
      </Content>
      </Layout>
      
      </Layout>
    </div>
  );
}

export default App;
