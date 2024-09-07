// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: 0,
  },
  reducers: {
    // setLoading(state, action) {
    //   state.isLoading = action.payload.isLoading;
    //   state.AlertSetting = action.payload.AlertSetting;
    // },
    startLoader(state, action){
      state.loader += 1;
    },
    stopLoader(state, action){
      if (state.loader>0)
      {
        state.loader -= 1;        
      }
    }
  },
});

export const { setLoading , startLoader, stopLoader} = loaderSlice.actions;

export const selectLoader = (state) => state.Loader.loader
export default loaderSlice.reducer;