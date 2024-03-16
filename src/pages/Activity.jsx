import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Activities from '../components/Activity/Activity';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Activity = () => {
  return (
    <div className="main">
      <Breadcrumb title="Activity" subpage="Pages" page="Activity" />
      <Activities />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Activity;
