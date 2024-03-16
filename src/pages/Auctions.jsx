import React, { Component } from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import LiveAuctions from '../components/Auctions/AuctionsTwo';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Auctions = () => {
  return (
    <div className="main">
      <Breadcrumb title="Auctions" subpage="Explore" page="Live Auctions" />
      <LiveAuctions />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Auctions;
