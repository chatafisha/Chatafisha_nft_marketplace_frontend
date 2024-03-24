import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero/Hero';
import Collections from '../components/Collections/Collections';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import ExploreThree from '../components/Explore/ExploreThree';
import { ReducerNames } from '../utils/constants';
import { wallet } from '..';

const HomePage = () => {
  const [tokens, setTokens] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const [collectionData, setCollectionData] = useState([]);
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);

  useEffect(() => {
    getNfts();
  }, []);

  useEffect(() => {
    if (userAccountId) {
      wallet.getMCollection().then((res) => {
        console.log(res);
        setCollectionData(res);
      });
    }
  }, [userAccountId]);

  const getNfts = async () => {
    wallet
      .getTokens()
      .then((res) => {
        console.log('Tokens fetched:', res);
        setTokens(res);
      })
      .catch((error) => {
        console.error('Error fetching tokens:', error);
      });
    setComponentVisibility(!isComponentVisible);
  };
  return (
    <div className="main">
      <Hero />
      {/* <Auctions /> */}
      {/* <TopSeller /> */}
      <ExploreThree tokens={tokens} />
      {/* <Work /> */}
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default HomePage;
