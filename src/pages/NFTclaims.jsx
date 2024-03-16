import React, { Component } from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ContactSection from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import NFTS from '../components/NFT/Nfts';

const Contact = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="NFT claims" subpage="Pages" page="NFT claims" />
      <NFTS />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Contact;
