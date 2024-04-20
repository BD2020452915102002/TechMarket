import React from 'react';
import {useAuth} from "../utils/AuthContext.jsx";
import Navbar from "../component/Navbar.jsx";
import DetailProductContent from "../component/DetailProductContent.jsx";
import {Box, Tab, Tabs} from "@mui/material";
import Comment from "../component/Comment.jsx";
import SuggestProduct from "../component/SuggestProduct.jsx";
import Footer from "../component/Footer.jsx";

function PrivateRoute(props) {
    const { isLoggedIn } = useAuth();
    if (isLoggedIn) return (
        <>
            {
                props.children
            }
        </>
    );
    else return (
        <div className={'mx-20'}>
            <Navbar/>
            <div className={'mt-52 mb-36 font-extrabold text-3xl text-red-400 italic text-center' }>Bạn cần đăng nhập để tiếp tục hành động của mình!</div>
            <Footer/>
        </div>
    )
}

export default PrivateRoute;