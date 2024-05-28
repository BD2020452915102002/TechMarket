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

export const userApi = {
  getAllUsers() {
    const url = "/user";
    return api.get(url);
  },

  async createUser(data) {
    try {
    } catch (error) {
      console.error("Error during creating user:", error);
    }
  },
};

export const checkoutApi = {
  async checkout(data) {
    try {
      // {
      //     "userId": "664cc642e3de3cee7ce68cb3",
      //     "cartItems": [
      //       {
      //           "id": "66125699a6aeb7c988b75e06",
      //           "quantity" : 2
      //       },
      //       {
      //           "id": "66134c4c5e06ddba8e42df76",
      //           "quantity" : 4
      //       }
      //     ]
      //}
      const url = "/stripe/create-checkout-session";

      const checkoutUrl = await api.get(url, data);

      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  },
};
