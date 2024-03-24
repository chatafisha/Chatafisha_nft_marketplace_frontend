import React from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Help from '../components/HelpCenter/HelpCenter';
import Faq from '../components/Faq/Faq';

const HelpCenter = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Help Center" subpage="Community" page="Help Center" />
      <Help />
      <Faq />
    </div>
  );
};

export default HelpCenter;
