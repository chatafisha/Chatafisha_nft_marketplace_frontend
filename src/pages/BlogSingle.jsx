import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Blog from '../components/BlogSingle/BlogSingle';

const BlogSingle = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Blog Single" subpage="Community" page="Blog Single" />
      <Blog />
    </div>
  );
};

export default BlogSingle;
