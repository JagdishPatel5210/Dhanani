import { createSlice } from '@reduxjs/toolkit';
import { HttpMethod } from '../Slices/httpMethod';
import { startLoader, stopLoader } from '../Slices/loaderSlice.js';
import { AlertPopup } from '../Slices/common.js';

export const fetchData = (data) => async (dispatch) => {
  dispatch(startLoader())
  const res = await HttpMethod.post('/SystemConfig/InsUpdDel/DynSpExDisp', data);
  if (res.status === 200) {
    dispatch(getData(await res.data));
  }
  dispatch(stopLoader())
};


export const fetchDataNew = async (obj) => {
  let GetDet = await HttpMethod.post(`/SystemConfig/InsUpdDel/DynSpExDisp`, obj)
  return GetDet.data.DynDisp

}
export const fetchDataNew1 = async (obj) => {
  let GetDet = await HttpMethod.post(`/SystemConfig/InsUpdDel/DynSpExDisp`, obj)
  return GetDet.data.DynDisp1

}

export const addData = (data, getAllData) => async (dispatch) => {
  const res = await HttpMethod.post('/SystemConfig/InsUpdDel/DynSpEx', data);
  if (res.status === 200) {
    AlertPopup.SuccessPopup(res.data);
    if (getAllData) {
      getAllData();
    }
    //dispatch(fetchData())  ----------Bandh kryu che km k prob ave che ---Khushali
  }
};

export const updateData = (data) => async (dispatch) => {
  const res = await HttpMethod.post('/Stock/STKTrnParty/Upload', data);
  dispatch(fetchData());   //farithi Fill karva mate
};

export const deleteData = (data) => async (dispatch) => {
  const res = await HttpMethod.post('/Stock/STKTrnParty/Delete', data);
  dispatch(fetchData());   //Delete karva mate
}

export const DynamicSlice = createSlice({
  name: 'DynamicSlice',
  initialState: {},
  loading: false,
  reducers: {
    getData: (state, action) => {
      return { ...action.payload };
    }
  },
});

export const { getData } = DynamicSlice.actions;
export default DynamicSlice.reducer;