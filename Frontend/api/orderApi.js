import { api, setHeaders } from "./api.js";

export const orderApi = {
    createOrder() {
        const url = "/order";
        return api.post(url, setHeaders());
    },
    getAllOrder() {
        const url = "/order";
        return api.get(url, setHeaders());
    },
    getOrderById(orderId) {
        const url = `/order/${orderId}`;
        return api.get(url, setHeaders());
    },
    updateOrderById(orderId) {
        const url = `/order/${orderId}`;
        return api.put(url, setHeaders());
    },
    deleteOrder(orderId) {
        const url = `/order/${orderId}`;
        return api.delete(url, setHeaders());
    }
};
