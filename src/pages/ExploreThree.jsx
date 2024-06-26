import React, { useEffect, useState } from 'react';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ExploreThree from '../components/Explore/ExploreThree';
import { wallet } from '..';

const initData = {
  pre_heading: 'Explore',
  heading: 'Exclusive Digital Assets',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.',
  filter_1: 'All',
  filter_2: 'Art',
  filter_3: 'Music',
  filter_4: 'Collectibles',
  filter_5: 'Sports',
};

const ExploreThreee = () => {
  const [tokens, setTokens] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(false);
  useEffect(() => {
    getNfts();
  }, []);

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

  // console.log("Tokens:", tokens);
  // console.log("Loading:", loading);

  return (
    <div className="main">
      <Breadcrumb title="Explore" subpage="Explore" page="Chatafisha NFTs" />

      {/* <div className="row justify-content-center">
        <a className="btn btn-bordered-white flex-center" onClick={getNfts}>
          <i className="icon-loop mr-2" />
          Load Nfts if they're not loaded
        </a>
      </div> */}

      {tokens ? (
        isComponentVisible && <ExploreThree tokens={tokens}></ExploreThree>
      ) : (
        <div> No tokens found</div>
      )}
    </div>
  );
};

export default ExploreThreee;
