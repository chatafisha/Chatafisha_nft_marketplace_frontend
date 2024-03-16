import 'regenerator-runtime/runtime';
import React, { useEffect } from 'react';
import CustomHeader from './common/Header';
import CustomFooter from './common/Footer';
import { wallet } from '.';
import { useDispatch } from 'react-redux';
import { updateUserAccountId } from './redux/reducer/commonReducer';
import MyRoutes from './routers/routes';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    wallet
      .startUp()
      .then((value) => {
        dispatch(updateUserAccountId(value.accountId));
      })
      .catch(() => {
        dispatch(updateUserAccountId(false));
      });
  });

  return (
    <>
      <MyRoutes />
    </>
  );
}
