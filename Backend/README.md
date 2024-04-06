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
🚀 You can use [jwt.io](https://jwt.io) to view decoding !

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

### Comment

Example Json
```json
{
  "_id": "comment_id",
  "productId": "product_id",
  "userId": "user_id",
  "comment": "Nội dung của comment",
  "rating": 4,
  "createdAt": "2024-04-06T12:00:00.000Z",
  "updatedAt": "2024-04-06T12:00:00.000Z"
}
```

```json
{
  "_id": "reply_id",
  "productId": "product_id",
  "userId": "user_id",
  "comment": "Nội dung của comment phản hồi",
  "rating": 5,
  "parentCommentId": "parent_comment_id",
  "createdAt": "2024-04-06T12:00:00.000Z",
  "updatedAt": "2024-04-06T12:00:00.000Z"
}
```

### Product

```json
{
    "name":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN",
    "alias": "laptop-lenovo-ideapad-slim-3-14iah8-83eq0005vn",
    "desc":"Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0005VN (Core i5-12450H | 16GB | 512GB | Intel UHD | 14 inch FHD | Win 11 | Xám)",
    "brand": "Lenovo",
    "price": 12990000,
    "category": ["Laptop", "Computer"],
    "stock": 100,
    "image": "https://laptopworld.vn/media/product/14758_lenovo_ideapad_slim_3_14iah8_logo.jpg",
    "rate": 2
}
```