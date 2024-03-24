import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ContactSection from '../components/Contact/Contact';

const Contact = () => {
  return (
    <div className="main">
      <Breadcrumb
        title="Claim Your NFT"
        subpage="Pages"
        page="Claim Your NFT"
      />
      <ContactSection />
    </div>
  );
};

export default Contact;
