import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../page/customer/Home.jsx";
import Login from "../page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryItem from "../page/customer/CategoryItem.jsx";
import DetailProduct from "../page/customer/DetailProduct.jsx";
import CreateAccount from "../page/CreateAccount.jsx";
import ShoppingCart from "../page/customer/ShoppingCart.jsx";
import DetailUserInfor from '../page/customer/DetailUserInfor.jsx';

function AppRouters(props) {
    return (
        <Routes>
            <Route path={"/createAccount"} element={<CreateAccount />} />
            <Route path={"/cart"} element={<ShoppingCart />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/sos"} element={<DetailUserInfor />} />
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
    );
}

export default AppRouters;