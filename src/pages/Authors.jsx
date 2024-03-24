import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Author from '../components/Authors/Authors';
import TopSeller from '../components/TopSeller/TopSellerTwo';

const Authors = () => {
  return (
    <div className="main">
      <Breadcrumb title="Authors" subpage="Pages" page="Authors" />
      <Author />
      <TopSeller />
    </div>
  );
};

export default Authors;
