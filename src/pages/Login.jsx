import React from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import LoginSection from '../components/Login/Login';

const Login = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Login" subpage="Pages" page="Login" />
      <LoginSection />
    </div>
  );
};

export default Login;
