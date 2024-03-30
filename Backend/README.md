# API

## Register and Log in

<center>

| API              | request    | response |
|------------------|--------|--------|
| http://localhost:5000/api/register| name, email, password, phone, address    | token |
| http://localhost:5000/api/login  | email, password    |  token | 

</center>

To decode the token do the following:

```js
//...
import jwtDecode from "jwt-decode";
//...
const user = jwtDecode(token);
```
Can use [jwt.io](https://jwt.io) to view decoding !

### User API

**Role:** `customer < employee < manager`

<center>

| API              | Method    | Response | Role |
|------------------|--------|--------|--------|
| http://localhost:5000/api/user|  GET POST  | JSON | manager |
| http://localhost:5000/api/user/:id|  DELETE  | JSON | manager |
| http://localhost:5000/api/user/:id|  GET PUT  | JSON | customer |

</center>

To determine roles, do the following:

```js
//feature: apj.js
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
const response = await axios.get(`${url}/user`, setHeaders());
```