import { createSlice } from '@reduxjs/toolkit';
import { ReducerNames } from '../../utils/constants';

export const commonReducer = createSlice({
  name: ReducerNames.COMMON,
  initialState: {
    userAccountId: false,
    isAdmin: false,
  },
  reducers: {
    updateUserAccountId: (state, action) => {
      state.userAccountId = action.payload;
    },
    updateAdminLogin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { updateUserAccountId, updateAdminLogin } = commonReducer.actions;

export default commonReducer.reducer;
