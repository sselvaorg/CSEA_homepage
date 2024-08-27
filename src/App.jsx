import React from 'react';
import  { useState } from 'react';
import { Layout, Menu, Select, Typography, Row, Col, Card } from 'antd';
import { HomeOutlined, InfoCircleOutlined, MailOutlined, MenuOutlined } from '@ant-design/icons';
import './index.css';
import './App.css';
import image from '../src/assets/homepage.svg';
import fre1 from '../src/assets/fre1.jpg';
import fre2 from '../src/assets/fre2.jpg';
import aba1 from '../src/assets/aba1.jpg';
import aba2 from '../src/assets/aba2.jpg';

document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Option } = Select;

function HomePage() {

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Layout className="outer min-h-screen">
      <Header className="header">
<div className="logo">
  <Menu mode="horizontal" theme="dark" style={{ backgroundColor: '#6A0DAD', margin: '0', height: '100%' }}>
    <Menu.Item key="logo" style={{ color: '#fff', fontSize: '24px' }}>
      CSEA
    </Menu.Item>
  </Menu>
</div>
<div className="menu-toggle" onClick={handleMenuClick}>
  <MenuOutlined style={{ fontSize: '24px', color: '#fff' }} />
</div>
<div className={`menu-items ${menuVisible ? 'visible' : ''}`}>
  <Menu mode="horizontal" theme="dark" style={{ backgroundColor: '#6A0DAD', margin: '0', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
    <Menu.Item key="home" icon={<HomeOutlined />}><a href="#home">Home</a></Menu.Item>
    <Menu.Item key="about" icon={<InfoCircleOutlined />}><a href="#about">About</a></Menu.Item>
    <Menu.Item key="contact" icon={<MailOutlined />}><a href="#contact">Contact</a></Menu.Item>
    <Menu.Item key="team">
      <Select defaultValue="Team" style={{ width: 120 }} bordered={false}>
        <Option value="student">Student</Option>
        <Option value="staff">Staff</Option>
      </Select>
    </Menu.Item>
  </Menu>
</div>
</Header>

      <Content style={{ padding: '0 20px', marginTop: '20px' }}>
        <Row gutter={[16, 24]} justify="center" style={{ padding: '20px 0' }}>
          <Col xs={24} md={20} lg={18}>
            <Title level={1} className='home' style={{ textAlign: 'center' }}>ABOUT</Title>
            <Paragraph className="bold" style={{ color: 'black', maxWidth: '100%', margin: '0 auto', textAlign: 'center' }}>
            The Computer Science and Engineering Association (CSEA) of College of Engineering Guindy is an association with a legacy of more than 10 years, established for the primary goal of "Knowledge Advancement". Being the brainchild of Department of Computer Science and Engineering (DCSE) of CEG, one of the oldest engineering colleges of the country, the association ensures that the role of technocrats and specialists in various industries is implied. It extends to develop and promote the progression of Computer Science and technologies to its students as well as the members of the global community through its rich alumni support. Comprising students and faculty, CSEA is one of the most active Engineering Associations in the city.
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={[16, 24]} justify="center" style={{ padding: '20px 0' }}>
          <Col xs={24} md={20} lg={18}>
            <Title level={2} className='home' style={{ textAlign: 'center' }}>Freshers</Title>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{ width: '100%', height: '300px', borderRadius: '20px', backgroundImage: `url(${fre1})`, backgroundSize: 'cover', marginBottom: '16px' }}
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{ width: '100%', height: '300px', borderRadius: '20px', backgroundImage: `url(${fre2})`, backgroundSize: 'cover', marginBottom: '16px' }}
            />
          </Col>
        </Row>

        <Row gutter={[16, 24]} justify="center" style={{ padding: '20px 0' }}>
          <Col xs={24} md={20} lg={18}>
            <Title level={2} className='home' data-aos="fade-up" data-aos-duration='1000' style={{ textAlign: 'center' }}>Abacus'24</Title>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} data-aos="fade-up" data-aos-duration='1000' style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{ width: '100%', height: '300px', borderRadius: '20px', backgroundImage: `url(${aba1})`, backgroundSize: 'cover', marginBottom: '16px' }}
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} data-aos="fade-up" data-aos-duration='1000' style={{ textAlign: 'center' }}>
            <Card
              hoverable
              style={{ width: '100%', height: '300px', borderRadius: '20px', backgroundImage: `url(${aba2})`, backgroundSize: 'cover', marginBottom: '16px' }}
            />
          </Col>
        </Row>
      </Content>

      <Footer style={{ backgroundColor: '#4B0082', color: 'white', textAlign: 'center', padding: '20px' }}>
        <div>
          <p>CSEA</p>
          <p>CEG, Anna University,</p>
          <p>Chennai.</p>
        </div>
        <div style={{ backgroundColor: 'transparent', padding: '10px' }}>
          <p style={{ color: 'white' }}>&copy; 2024 CSEA</p>
        </div>
      </Footer>
    </Layout>
  );
}

export default HomePage;
