import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import NFTS from '../components/NFT/Nfts';

const Contact = () => {
  return (
    <div className="main">
      <Breadcrumb title="NFT claims" subpage="Pages" page="NFT claims" />
      <NFTS />
    </div>
  );
};

export default Contact;
