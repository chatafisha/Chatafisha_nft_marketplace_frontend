import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AuthorProfile from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Author = () => {
  return (
    <div className="main">
      <Breadcrumb title="Author Profile" subpage="Pages" page="Author" />
      <AuthorProfile />
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Author;
