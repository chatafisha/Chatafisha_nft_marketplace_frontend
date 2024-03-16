import React, { Component, useEffect, useState } from 'react';

import Header from '../common/Header';
import Hero from '../components/Hero/Hero';
import Auctions from '../components/Auctions/AuctionsOne';
import TopSeller from '../components/TopSeller/TopSellerOne';
import Collections from '../components/Collections/Collections';
import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import { ExportAccountSelectorContextProvider } from '../contexts/WalletSelectorExportContext';
import ExploreThree from '../components/Explore/ExploreThree';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';
import { wallet } from '..';

const ThemeOne = () => {
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  const [tokens, setTokens] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(false);
  const [collectionData, setCollectionData] = useState([]);

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
      <ExportAccountSelectorContextProvider>
        <Header />
      </ExportAccountSelectorContextProvider>
      <Hero />
      {/* <Auctions /> */}
      {/* <TopSeller /> */}
      {collectionData.length !== 0 ? (
        <Collections collection={collectionData} />
      ) : (
        <div></div>
      )}

      <ExploreThree tokens={tokens} />
      {/* <Work /> */}
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default ThemeOne;
