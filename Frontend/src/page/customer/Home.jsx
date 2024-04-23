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
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions.js";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection.js";
import { logout } from "../../utils/auth.js";
import Messenger from "./messenger/Messenger.jsx";

function Home({ setUserDetails }) {
  const products = initState.data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout;
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);

  if (loading) {
    return (
      <Box className={"w-[100vw] h-[100vh] flex justify-center items-center"}>
        <CircularProgress />
      </Box>
    );
  } else
    return (
      <AllProduct>
        <div className={"bg-gray-50 "}>
          <div className={"mx-20 "}>
            <Navbar />
            <Slide />
            <Category />
            <Sale />
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
      </AllProduct>
    );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Home);
