import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Activities from '../components/Activity/Activity';

const Activity = () => {
  return (
    <div className="main">
      <Breadcrumb title="Activity" subpage="Pages" page="Activity" />
      <Activities />
    </div>
  );
};

export default Activity;
