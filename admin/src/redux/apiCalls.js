import { publicRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";
// productSlice
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post(`/auth/login-user`, user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// ######### PRODUCTS #########

// GET ALL PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get(`/products`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
