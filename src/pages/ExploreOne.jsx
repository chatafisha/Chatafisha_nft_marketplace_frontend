import React, { Component } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreTwo';

const ExploreOne = () => {
  return (
    <div className="main">
      <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 1" />
      <Explore />
    </div>
  );
};

export default ExploreOne;
