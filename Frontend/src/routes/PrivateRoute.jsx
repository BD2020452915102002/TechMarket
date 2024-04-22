import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import { Box, CircularProgress } from "@mui/material";
import { connect } from "react-redux";

function PrivateRoute(props, { userDetails }) {
  const isLoggedIn = userDetails != null ? true : false;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Box className={"w-[100vw] h-[100vh] flex justify-center items-center"}>
        <CircularProgress />
      </Box>
    );
  }

  if (isLoggedIn) {
    return <>{props.children}</>;
  } else {
    return (
      <div className={"mx-20"}>
        <Navbar />
        <div
          className={
            "mt-52 mb-36 font-extrabold text-3xl text-red-400 italic text-center"
          }
        >
          Bạn cần đăng nhập để tiếp tục hành động của mình!
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth,
  };
};

export default connect(mapStoreStateToProps)(PrivateRoute);
