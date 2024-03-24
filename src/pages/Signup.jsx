import React from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import SignupSection from '../components/Signup/Signup';

const Signup = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Signup" subpage="Pages" page="Signup" />
      <SignupSection />
    </div>
  );
};

export default Signup;
