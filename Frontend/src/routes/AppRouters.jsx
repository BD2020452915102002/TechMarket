import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../page/Home.jsx";
import Login from "../page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryItem from "../page/CategoryItem.jsx";
import DetailProduct from "../page/DetailProduct.jsx";

function AppRouters(props) {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/category/:categoryID"} element={
                <PrivateRoute>
                    <CategoryItem/>
                </PrivateRoute>
            }/>
            <Route path={"/products/:productID"} element={
                <PrivateRoute>
                    <DetailProduct/>
                </PrivateRoute>
            }/>
        </Routes>
    );
}

export default AppRouters;