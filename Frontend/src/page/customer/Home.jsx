import Slide from "../../component/Slide.jsx";
import Sale from "../../component/Sale.jsx";
import Navbar from "../../component/Navbar.jsx"
import Footer from "../../component/Footer.jsx"
import Content from "../../component/Content.jsx";
import Category from "../../component/Category.jsx";
import { AllProduct } from "../../store/Provider.jsx";
import {initState} from "../../store/Reducer.jsx";
import React, {useEffect, useState} from "react";
import {Box, CircularProgress} from "@mui/material";

function Home() {
    const products =initState.data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       setLoading(false)
    }, []);

    if (loading) {
        return (
            <Box  className={'w-[100vw] h-[100vh] flex justify-center items-center'}>
                <CircularProgress />
            </Box>
        );
    }
    else return (
        <AllProduct>
            <div className={'bg-gray-50 '}>
                <div className={'mx-20 '}>
                    <Navbar />
                    <Slide />
                    <Category />
                    <Sale />
                    <Content priceShow={true} brandShow={true} saleShow={true} categoryShow={true} stockShow={true} product={products} />
                    <Footer />
                </div>
            </div>
        </AllProduct>
    );
}

export default Home;