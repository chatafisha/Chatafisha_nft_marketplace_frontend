import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ExploreThree from '../pages/ExploreThree';
import ItemDetails from '../pages/ItemDetails';
import MyCollection from '../pages/MyCollection';
import TransferMsg from '../pages/TransferMsg';
import Contact from '../pages/Contact';
import Create from '../pages/Create';
import CreateMsg from '../pages/CreateMsg';
import NFTclaims from '../pages/NFTclaims';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';
import PrivateRoute from './PrivateRoute';
import Header from '../common/Header';

const Wrapper = ({ children }) => {
  return (
    <>
      {/* commenting for right now -> IAH FV minting is at hault */}
      {/* <ProgressTracker /> */}
      <Header />
      {children}
    </>
  );
};

const MyRoutes = () => {
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Wrapper>
                <HomePage />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/collection"
            element={
              <Wrapper>
                <MyCollection />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/explore"
            element={
              <Wrapper>
                <ExploreThree />
              </Wrapper>
            }
          />
          <Route
            path="/item-details/:type"
            element={
              <Wrapper>
                <ItemDetails />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/transfer-msg/:type"
            element={
              <Wrapper>
                <TransferMsg />
              </Wrapper>
            }
          />
          <Route
            exact
            path="/claim-nft"
            element={
              <Wrapper>
                <Contact />
              </Wrapper>
            }
          />
          {/* <PrivateRoute
            exact
            path="/create"
            element={Create}
            accountId={userAccountId}
          />
          <PrivateRoute
            exact
            path="/create-msg/:type"
            element={CreateMsg}
            accountId={userAccountId}
          />
          <PrivateRoute
            exact
            path="/nft-claims"
            element={NFTclaims}
            accountId={userAccountId}
          /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
