import React, {useEffect, useState, useCallback} from 'react';
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {orderApi} from "../../../api/orderApi.js";
import OrderProductChild from "../../component/OrderProductChild.jsx";
import {formatNumber} from "../../utils/formatNumber.js";

function ManageStatusProduct() {
    const [orderProducts, setOrderProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const fetchOrders = useCallback(async () => {
        try {
            const res = await orderApi.getAllOrder();
            setOrderProducts(res.data.data);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    useEffect(() => {
        setFilteredOrders(
            orderProducts.filter(order =>
                order._id.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, orderProducts]);

    const handleStatusChange = async (orderId, newStatus, order) => {
        try {
            await orderApi.updateOrderById(orderId, {
                ...order,
                delivery_status: newStatus
            });
            fetchOrders();
        } catch (error) {
            console.error("Failed to update order status", error);
        }
    };

    const handleOpenDialog = (orderId) => {
        setSelectedOrderId(orderId);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedOrderId(null);
    };

    const handleDeleteOrder = async () => {
        if (selectedOrderId) {
            try {
                const res = await orderApi.deleteOrder(selectedOrderId);
                console.log('dete', res)
                fetchOrders();
                handleCloseDialog();
            } catch (error) {
                console.error("Failed to delete order", error);
            }
        }
    };

    return (
                <div className="">
                    <h1 className="font-bold text-xl uppercase py-6">
                        Danh sách đơn hàng của bạn
                    </h1>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo ID đơn hàng"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4 p-2 border border-gray-400 rounded w-full"
                    />
                    <div>
                        {filteredOrders.length !== 0 ? (
                            <div>
                                {filteredOrders.map((order, index) => (
                                    <div key={index} className="border-[1px] border-black mb-12 p-8">
                                        <div className="grid grid-cols-[80%,20%] gap-2">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-bold text-lg">Order ID: {order._id}</p>
                                                        <p className="text-yellow-500">
                                                            Trạng thái:
                                                            <select
                                                                value={order.delivery_status}
                                                                onChange={(e) => handleStatusChange(order._id, e.target.value, order)}
                                                                className="ml-2 p-1 border border-gray-400 rounded"
                                                            >
                                                                <option value="pending">Đang giao</option>
                                                                <option value="delivered">Giao thành công</option>
                                                                <option value="rejected">Bị từ chối</option>
                                                            </select>
                                                        </p>
                                                        <p className="text-green-500">
                                                            Thanh
                                                            toán: {order.payment_status === "paid" ? "Đã thanh toán" : "Chưa thanh toán"}
                                                        </p>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-xl">
                                                        <p>Giao cho: {order.shipping?.name}</p>
                                                        <p>Số điện thoại: {order.shipping?.phone}</p>
                                                        <p>Địa
                                                            chỉ: {order.shipping?.address?.line1}, {order.shipping?.address?.city}, {order.shipping?.address?.state}, {order.shipping?.address?.country}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {order.delivery_status === "pending" && (
                                                <div className="flex items-center justify-end">
                                                    <Button
                                                        variant="contained"
                                                        color="error"
                                                        onClick={() => handleOpenDialog(order._id)}
                                                    >
                                                        Huỷ đơn hàng
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                        <OrderProductChild products={order.products}/>
                                        <p className="font-bold text-center mt-2 -mb-4 text-lg">
                                            Thành tiền: {formatNumber(order?.total)} đ
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className="h-[300px] flex bg-white items-center justify-center font-medium text-2xl italic text-red-600">
                                Bạn chưa mua sản phẩm nào
                            </div>
                        )}
                    </div>

            <Dialog
                open={open}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Xác nhận huỷ đơn hàng</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bạn có chắc chắn muốn huỷ đơn hàng này không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleDeleteOrder} color="error">
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ManageStatusProduct;
