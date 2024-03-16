import { configureStore } from '@reduxjs/toolkit';
import { ReducerNames } from '../../utils/constants';
import commonReducer from '../reducer/commonReducer';

export default configureStore({
  reducer: {
    [ReducerNames.COMMON]: commonReducer,
  },
});
