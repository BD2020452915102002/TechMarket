//feature: apj.js
import axios from "axios";

export const url = "http://localhost:5000/api";

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};
//...
await axios.get(`${url}/user`, setHeaders());
