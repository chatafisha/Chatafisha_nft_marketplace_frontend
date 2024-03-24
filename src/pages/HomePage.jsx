import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero/Hero';
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
    </div>
  );
};

export default HomePage;
