import React from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Blog from '../components/BlogSingle/BlogSingle';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const BlogSingle = () => {
  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Blog Single" subpage="Community" page="Blog Single" />
      <Blog />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default BlogSingle;
