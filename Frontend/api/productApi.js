import {api} from "./axios.js";

export const productApi = {
    getProduct() {
        const url = '/product'
        return api.get(url)
    },
}