import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';

const PrivateRoute = ({ component: Component, accountId, ...rest }) => {
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  const allowedAccountIds = [
    'chatafisha_marketplace.near',
    'chatafisha_nft_marketplace.testnet',
  ];
  // Allowed accountId

  return (
    <Route
      {...rest}
      render={(props) =>
        allowedAccountIds.includes(userAccountId) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
