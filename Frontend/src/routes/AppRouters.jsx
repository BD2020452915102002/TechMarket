import React, {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../page/customer/Home.jsx";
import Login from "../page/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import CategoryItem from "../page/customer/CategoryItem.jsx";
import DetailProduct from "../page/customer/DetailProduct.jsx";
import CreateAccount from "../page/customer/CreateAccount.jsx";
import ShoppingCart from "../page/customer/ShoppingCart.jsx";
import Chatboard from "../page/customer/Chatboard/Chatboard.jsx";
import {productApi} from "../../api/productApi.js";
import {fetchData} from "../store/actions/productsAction.js";
import {useDispatch} from "react-redux";
import {Dashboard} from "@mui/icons-material";
import HomeManage from "../page/manage/layout/HomeManage.jsx";
import Users from "../page/manage/Users.jsx";
import Products from "../page/manage/Products.jsx";
import DetailUserInfor from "../page/customer/DetailUserInfor.jsx";
import OrderStatus from "../page/customer/OrderStatus.jsx";
import ManageStatusProduct from "../page/manage/ManageStatusProduct.jsx";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AppRouters(props) {
    const dispatch = useDispatch();
    const fetchDataAsync = async () => {
        try {
            const res = await productApi.getProduct();
            dispatch(fetchData(res.data.data));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);
    return (
        <div>
            <ScrollToTop/>
            <Routes>
                /// shared
                <Route path={"/login"} element={<Login/>}/>


                /// customer
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/createAccount"} element={<CreateAccount/>}/>
                <Route path={"/orderstatus"} element={
                    <PrivateRoute>
                        <OrderStatus/>
                    </PrivateRoute>
                }/>
                <Route
                    path={"/category/:categoryID"}
                    element={
                        <PrivateRoute>
                            <CategoryItem/>
                        </PrivateRoute>
                    }
                />
                <Route path={"/infor"} element={<PrivateRoute>
                    <DetailUserInfor/>
                </PrivateRoute>}/>
                <Route
                    path={"/products/:productID"}
                    element={
                        <PrivateRoute>
                            <DetailProduct/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={"/cart"}
                    element={
                        <PrivateRoute>
                            <ShoppingCart/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path={"/chat"}
                    element={
                        <PrivateRoute>
                            <Chatboard/>
                        </PrivateRoute>
                    }
                />


                /// Emloyee and manage
                <Route path="/managehome" element={<HomeManage/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="managestatusproduct" element={<ManageStatusProduct/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default AppRouters;
