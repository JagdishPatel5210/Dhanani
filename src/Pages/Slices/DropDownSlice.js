import { createSlice } from '@reduxjs/toolkit';
import { HttpMethod } from './httpMethod';

export const fetchData = () => async (dispatch) => {
  debugger
  let ObjJsonDet = {
    jsonObj1: [{}],
    SPName: "API_DropDownGet"
  };
  let res = await HttpMethod.post(`/SystemConfig/InsUpdDel/DynSpExDisp`, ObjJsonDet);
console.log('res',res);
  // let data = {};
  // if (res.data) {
  //   for (let key in res.data) {
  //     if (res.data[key] && res.data[key].length) {
  //       data[res.data[key][0].MENU] = res.data[key]
  //     }
  //   }
  // }
  // dispatch(getData(data))
}

export const DropDownSlice = createSlice({
  name: 'DropDown',
  initialState: {},
  loading: false,
  reducers: {
    getData: (state, action) => {
      return action.payload;
    }
  },
});
export const { getData } = DropDownSlice.actions;
export default DropDownSlice.reducer;