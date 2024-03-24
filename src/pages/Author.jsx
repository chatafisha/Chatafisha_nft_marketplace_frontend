import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Author = () => {
  return (
    <div className="main">
      <Breadcrumb title="Author Profile" subpage="Pages" page="Author" />
      <AuthorProfile />
    </div>
  );
};

export default Author;
