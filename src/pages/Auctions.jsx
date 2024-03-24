import React, { Component } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import LiveAuctions from '../components/Auctions/AuctionsTwo';

const Auctions = () => {
  return (
    <div className="main">
      <Breadcrumb title="Auctions" subpage="Explore" page="Live Auctions" />
      <LiveAuctions />
    </div>
  );
};

export default Auctions;
