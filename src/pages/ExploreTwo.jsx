import React from 'react';

import Header from '../common/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreThree';

const ExploreTwo = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 2" />
      <Explore />
    </div>
  );
};

export default ExploreTwo;
