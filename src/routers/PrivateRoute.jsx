import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReducerNames } from '../utils/constants';

const PrivateRoute = ({ component }) => {
  const { userAccountId } = useSelector((state) => state[ReducerNames.COMMON]);
  const allowedAccountIds = [
    'chatafisha_marketplace.near',
    'chatafisha_nft_marketplace.testnet',
  ];
  if (userAccountId === false) {
    return <></>;
  }
  return allowedAccountIds.includes(userAccountId) ? (
    component
  ) : (
    <Navigate to="/" />
  );
};
export default PrivateRoute;
