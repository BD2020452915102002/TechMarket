import { api } from "./axios.js";

export const productApi = {
  getProduct() {
    const url = "/product";
    return api.get(url);
  },

  updateCart(userId, productId) {
    const url = `/user/${userId}/cart/${productId}`;
    return api.post(url);
  },

  deleteUserCart(userId, productId) {
    const url = `/user/${userId}/cart/${productId}`;
    return api.delete(url);
  },
};
