import React from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Wallet from '../components/Wallet/Wallet';

const WalletConnect = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb
        title="Wallet Connect"
        subpage="Pages"
        page="Wallet Connect"
      />
      <Wallet />
    </div>
  );
};

export default WalletConnect;
