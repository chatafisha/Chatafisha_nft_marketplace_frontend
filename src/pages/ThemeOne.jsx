import React, { useEffect, useState } from 'react';

import Header from '../common/Header';
import Hero from '../components/Hero/Hero';
import Collections from '../components/Collections/Collections';

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
    </div>
  );
};

export default ThemeOne;
