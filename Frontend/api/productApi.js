import { api } from "./axios.js";

export const productApi = {
  getProduct() {
    const url = "/product";
    return api.get(url);
  },
  getUserCart(userId) {
    const url = `/user/${userId}/cart/`;
    return api.get(url);
  },
  updateUserCart(userId, productId) {
    const url = `/user/${userId}/cart/${productId}`;
    return api.post(url);
  },
  deleteUserCart(userId, productId) {
    const url = `/user/${userId}/cart/${productId}`;
    return api.delete(url);
  },
};
