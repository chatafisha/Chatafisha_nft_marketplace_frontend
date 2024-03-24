import React, { Component } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Creates from '../components/Create/Create';

const Create = () => {
  return (
    <div className="main">
      <Breadcrumb title="Create" subpage="Pages" page="Create" />
      <Creates />
    </div>
  );
};

export default Create;
