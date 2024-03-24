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
import PrivateRoute from './PrivateRoute';
import Header from '../common/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

const Wrapper = ({ children }) => {
  return (
    <>
      {/* commenting for right now -> IAH FV minting is at hault */}
      {/* <ProgressTracker /> */}
      <Header />
      {children}
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </>
  );
};

const MyRoutes = () => {
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
            path="/item-details/:id"
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
          <Route
            exact
            path="/create"
            element={
              <PrivateRoute
                component={
                  <Wrapper>
                    <Create />
                  </Wrapper>
                }
              />
            }
          />
          <Route
            exact
            path="/create-msg/:type"
            element={
              <PrivateRoute
                component={
                  <Wrapper>
                    <CreateMsg />
                  </Wrapper>
                }
              />
            }
          />
          <Route
            exact
            path="/nft-claims"
            element={
              <PrivateRoute
                component={
                  <Wrapper>
                    <NFTclaims />
                  </Wrapper>
                }
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRoutes;
