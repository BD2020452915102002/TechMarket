import * as api from "../../../api/axios";
import { jwtDecode } from "jwt-decode";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
SET_IS_LOGGED_IN:"SET_IS_LOGGED_IN",
  LOGOUT:'LOGOUT'
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};
 const setIsLoggedIn = (isLoggedIn) =>{
  return {
    type: authActions.SET_IS_LOGGED_IN,
     isLoggedIn,
  }
}

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      console.log("Fail to login");
    } else {
      const userDetails = jwtDecode(response?.data);
      console.log(userDetails);
      //

      // localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem('session', JSON.stringify({ isLoggedIn: true ,userDetails:userDetails}));
      dispatch( setIsLoggedIn(true))
      dispatch(setUserDetails(userDetails));

      navigate("/");
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      console.log("Fail to register");
    } else {
      const userDetails = jwtDecode(response?.data);
      // localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem('session', JSON.stringify({ isLoggedIn: true ,userDetails:userDetails}));
      dispatch( setIsLoggedIn(true))
      dispatch(setUserDetails(userDetails));
      navigate("/");
    }
  };
};
 export const logout = () => {
   console.log('>>>>>>>>>>')
 return {
     type:authActions.LOGOUT
 }
};
