import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ContactSection from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Contact = () => {
  return (
    <div className="main">
      <Breadcrumb
        title="Claim Your NFT"
        subpage="Pages"
        page="Claim Your NFT"
      />
      <ContactSection />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Contact;
