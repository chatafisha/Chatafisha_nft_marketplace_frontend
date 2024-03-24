import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Collections from '../components/Collections/Collections';

const MyCollection = () => {
  return (
    <div className="main">
      <Breadcrumb title="My collection" subpage="Pages" page="My collection" />
      <Collections />
    </div>
  );
};

export default MyCollection;
