import React, { useEffect, useState, useCallback } from 'react';
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import { Button } from "@mui/material";
import { orderApi } from "../../../api/orderApi.js";
import OrderProductChild from "../../component/OrderProductChirld.jsx";
import {formatNumber} from "../../utils/formatNumber.js";

function OrderStatus() {
    const [orderProducts, setOrderProducts] = useState([]);
    const userID = JSON.parse(localStorage.getItem('session')).userDetails._id;

    const fetchOrders = useCallback(async () => {
        try {
            const res = await orderApi.getOrderByUserId(userID);
            setOrderProducts(res.data);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
    }, [userID]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    return (
        <div className="bg-gray-50">
            <div className="mx-20">
                <Navbar />
                <div className="mt-20">
                    <h1 className="font-bold text-xl uppercase py-6">
                        Danh sách đơn hàng của bạn
                    </h1>
                    <div>
                        {orderProducts.length !== 0 ? (
                            <div>
                                {orderProducts.map((order, index) => (
                                    <div key={index} className="border-[1px] border-black  mb-12 p-8">
                                        <div className="grid grid-cols-[80%,20%] gap-2">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-bold text-lg">Order ID: {order._id}</p>
                                                        <p className="text-green-500">
                                                            Thanh toán: {order.payment_status === "paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                                                        </p>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-xl">
                                                        <p>Giao cho: {order.shipping?.name}</p>
                                                        <p>Số điện thoại: {order.shipping?.phone}</p>
                                                        <p>Địa chỉ: {order.shipping?.address?.line1}, {order.shipping?.address?.city}, {order.shipping?.address?.state}, {order.shipping?.address?.country}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {order.delivery_status === "delivered" ? (
                                                <div className="flex items-center justify-end">
                                                    <div className={'bg-green-300 p-4 rounded-full font-bold'}>Giao hàng thành công</div>
                                                </div>
                                            ) : order.delivery_status === "pending" ?
                                                <div className="flex items-center justify-end">
                                                    <div className={'bg-yellow-300 p-4 rounded-full font-bold'}>Đơn hàng đang giao</div>
                                                </div> : <div className="flex items-center justify-end">
                                                    <div className={'bg-red-400 p-4 rounded-full font-bold'}>Đơn hàng từ chối</div>
                                                </div>
                                            }
                                        </div>
                                        <OrderProductChild products={order.products}/>
                                        <p className={'font-bold text-center mt-2 -mb-4 text-lg'}>Thành tiền: {formatNumber(order?.total)} đ</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-[300px] flex bg-white items-center justify-center font-medium text-2xl italic text-red-600">
                                Bạn chưa mua sản phẩm nào
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default OrderStatus;
