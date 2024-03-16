import React, { Component } from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import LoginSection from '../components/Login/Login';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Login = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Login" subpage="Pages" page="Login" />
      <LoginSection />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Login;