import Slide from "../../component/Slide.jsx";
import Sale from "../../component/Sale.jsx";
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import Content from "../../component/Content.jsx";
import Category from "../../component/Category.jsx";
import { AllProduct } from "../../store/Provider.jsx";
import { initState } from "../../store/Reducer.jsx";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import {connect, useDispatch, useSelector} from "react-redux";
import { getActions } from "../../store/actions/authActions.js";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection.js";
import Messenger from "./messenger/Messenger.jsx";
import {productApi} from "../../../api/productApi.js";
import {fetchData} from "../../store/actions/productsAction.js";
import productsReducer from "../../store/reducers/productsReducer.js";

function Home({ setUserDetails ,logout }) {
  const products = useSelector(state => state.products.data)
  const dispatch= useDispatch()
  const [loading, setLoading] = useState(true);

  console.log('llll',products)
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const res = await productApi.getProduct();
        dispatch(fetchData(res.data.data));
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataAsync();

  }, []);

  useEffect(() => {

    // const {userDetails} = localStorage.getItem("session");
    //
    // if (!userDetails) {
    //   logout
    // } else {
    //   setUserDetails(JSON.parse(userDetails));
    //   connectWithSocketServer(JSON.parse(userDetails));
    // }
  }, []);

  if (loading) {
    return (
      <Box className={"w-[100vw] h-[100vh] flex justify-center items-center"}>
        <CircularProgress />
      </Box>
    );
  } else
  return (

        <div className={"bg-gray-50 "}>
          <div className={"mx-20 "}>
            <Navbar />
            <Slide />
            <Category />
            {/*<Sale />*/}
            <Content
              priceShow={true}
              brandShow={true}
              saleShow={true}
              categoryShow={true}
              stockShow={true}
              product={products}
            />
            <Messenger />
            <Footer />
          </div>
        </div>
    );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Home);
