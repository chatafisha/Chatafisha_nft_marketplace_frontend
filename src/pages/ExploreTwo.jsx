import React, { Component } from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreThree';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const ExploreTwo = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 2" />
      <Explore />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default ExploreTwo;
