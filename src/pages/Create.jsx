import React, { Component } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Creates from '../components/Create/Create';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Create = () => {
  return (
    <div className="main">
      <Breadcrumb title="Create" subpage="Pages" page="Create" />
      <Creates />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Create;
