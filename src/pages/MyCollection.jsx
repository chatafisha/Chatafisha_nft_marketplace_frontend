import React, { Component } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Collections from '../components/Collections/Collections';

const MyCollection = () => {
  return (
    <div className="main">
      <Breadcrumb title="My collection" subpage="Pages" page="My collection" />
      <Collections />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default MyCollection;
