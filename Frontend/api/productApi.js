import { forgotPassword } from "../../Backend/controllers/ForgotPassController.js";
import { api, setHeaders } from "./api.js";

export const productApi = {
  getProduct() {
    const url = "/product";
    return api.get(url);
  },
  createProduct(data) {
    //   {
    //     "name":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN",
    //     "alias": "laptop-lenovo-ideapad-slim-3-14iah8-83eq0005vn",
    //     "desc":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN (Core i5-12450H | 16GB | 512GB | Intel UHD | 14 inch FHD | Win 11 | Xám)",
    //     "brand": "Lenovo",
    //     "price": 12990000,
    //     "category": ["Laptop", "Computer"],
    //     "stock": 100,
    //     "image": "https://laptopworld.vn/media/product/14758_lenovo_ideapad_slim_3_14iah8_logo.jpg",
    //     "rate": 2
    // }
    const url = "/product";
    return api.post(url, data);
  },
  deleteProduct(productId) {
    const url = `/product/${productId}`;
    return api.delete(url);
  },
  updateProduct(data, productId) {
    //   {
    //     "name":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN",
    //     "alias": "laptop-lenovo-ideapad-slim-3-14iah8-83eq0005vn",
    //     "desc":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN (Core i5-12450H | 16GB | 512GB | Intel UHD | 14 inch FHD | Win 11 | Xám)",
    //     "brand": "Lenovo",
    //     "price": 12990000,
    //     "category": ["Laptop", "Computer"],
    //     "stock": 100,
    //     "image": "https://laptopworld.vn/media/product/14758_lenovo_ideapad_slim_3_14iah8_logo.jpg",
    //     "rate": 2
    // }
    const url = `/product/${productId}`;
    return api.put(url);
  },
  getUserCart(userId) {
    const url = `/user/${userId}/cart/`;
    return api.get(url);
  },
  updateUserCart(userId, productId) {
    const url = `/user/${userId}/cart/${productId}`;
    return api.post(url);
  },
  deleteUserCart(userId) {
    // {
    //   "cartItems": ["fadfdasfafdasfs", "fasdfdasfadfsf"]
    // }
    const url = `/user/${userId}/cart`;
    return api.delete(url);
  },
};

export const userApi = {
  getAllUsers() {
    const url = "/user";
    return api.get(url, setHeaders);
  },

  async createUser(data) {
    try {
      // {
      //   "name": "dat",
      //   "email": "test@gmail.com",
      //   "password": "123456",
      //   "phone": "123456",
      //   "address": "Ha Noi",
      //   "role": "manager"
      // }
      const url = "/user";
      return await api.post(url, data, setHeaders);
    } catch (error) {
      console.error("Error during creating user:", error);
    }
  },
  async updateUser(data, userId) {
    try {
      // {
      //   "name": "dat",
      //   "email": "test@gmail.com",
      //   "password": "123456",
      //   "phone": "123456",
      //   "address": "Ha Noi",
      //   "role": "manager"
      // }
      const url = `/user/${userId}`;
      return await api.put(url, data, setHeaders);
    } catch (error) {
      console.error("Error during updating user:", error);
    }
  },
  async getUserById(userId) {
    try {
      const url = `/user/${userId}`;
      return await api.get(url, setHeaders);
    } catch (error) {
      console.error("Error during getting user:", error);
    }
  },
  async deleteUser(userId) {
    try {
      const url = `/user/${userId}`;
      return await api.delete(url, setHeaders);
    } catch (error) {
      console.error("Error during deleting user:", error);
    }
  },
  async forgotPassword(email) {
    try {
      // {
      //   "email": "abc@gmail.com"
      // }
      const url = "forgot_pass";
      return await api.post(url);
    } catch (error) {
      console.error("Error during forgot password:", error);
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
      const stripeUrl = await api.post(url, data);
      window.location.href = stripeUrl.data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  },
};

export const commentApi = {
  getAllComments() {
    const url = "/comment";
    return api.get(url);
  },

  createComment(comment) {
    // {
    //   "_id": "comment_id",
    //   "productId": "product_id",
    //   "userId": "user_id",
    //   "comment": "Nội dung của comment",
    //   "rating": 4,
    //   "createdAt": "2024-04-06T12:00:00.000Z",
    //   "updatedAt": "2024-04-06T12:00:00.000Z"
    // }

    const url = "/comment";
    return api.post(url, comment);
  },
};

export const orderApi = {
  createOrder() {
    const url = "/order";
    return api.post(url);
  },
};
