import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import BlogSection from '../components/Blog/Blog';

const Blog = () => {
  return (
    <div className="main">
      <Breadcrumb title="Blog" subpage="Community" page="Blog" />
      <BlogSection />
    </div>
  );
};

export default Blog;
