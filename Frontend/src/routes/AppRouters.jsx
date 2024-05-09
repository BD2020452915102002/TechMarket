import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/customer/Home.jsx";
import Login from "../page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryItem from "../page/customer/CategoryItem.jsx";
import DetailProduct from "../page/customer/DetailProduct.jsx";
import CreateAccount from "../page/CreateAccount.jsx";
import ShoppingCart from "../page/customer/ShoppingCart.jsx";
import CheckOut from "../page/customer/CheckOut.jsx";
import { productApi } from "../../api/productApi.js";
import { fetchData } from "../store/actions/productsAction.js";
import { useDispatch, useSelector } from "react-redux";
import eventEmitter from "../utils/eventEmitter.js";
import DetailUserInfor from '../page/customer/DetailUserInfor.jsx';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
function AppRouters(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const res = await productApi.getProduct();
                dispatch(fetchData(res.data.data));
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataAsync();
    }, []);
    const products = useSelector(state => state.products.data)

    console.log('>>>>', products)
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path={"/createAccount"} element={<CreateAccount />} />
                <Route path={"/cart"} element={<ShoppingCart />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/infor"} element={<DetailUserInfor />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/"} />
                <Route path={"/category/:categoryID"} element={
                    <PrivateRoute>
                        <CategoryItem />
                    </PrivateRoute>
                } />
                <Route path={"/products/:productID"} element={
                    <PrivateRoute>
                        <DetailProduct />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    );
}

export default AppRouters;