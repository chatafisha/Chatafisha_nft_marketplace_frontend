import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreFive';

const ExploreFour = () => {
  return (
    <div className="main">
      <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 4" />
      <Explore />
    </div>
  );
};

export default ExploreFour;
