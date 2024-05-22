# API

## Register and Log in

<center>

| API                                | request                               | response |
| ---------------------------------- | ------------------------------------- | -------- |
| http://localhost:5000/api/register | name, email, password, phone, address | token    |
| http://localhost:5000/api/login    | email, password                       | token    |

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

| API                                | Method   | Response | Role     |
| ---------------------------------- | -------- | -------- | -------- |
| http://localhost:5000/api/user     | GET POST | JSON     | manager  |
| http://localhost:5000/api/user/:id | DELETE   | JSON     | manager  |
| http://localhost:5000/api/user/:id | GET PUT  | JSON     | customer |

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

#### User avatar

- Customer avatar default: `https://res.cloudinary.com/dlgyapagf/image/upload/v1712984661/TechMarket-User/avatar_default/avatar-default_l2kmh0.jpg`

- Staff avatar default: `https://res.cloudinary.com/dlgyapagf/image/upload/v1713006089/TechMarket-User/avatar_default/staff-default_irff75.jpg`

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

### Product API

| API                                   | Method     | Response | Role     |
| ------------------------------------- | ---------- | -------- | -------- |
| http://localhost:5000/product/user    | GET        | JSON     | customer |
| http://localhost:5000/product/user    | POST       | JSON     | employee |
| http://localhost:5000/api/product/:id | GET        | JSON     | customer |
| http://localhost:5000/api/product/:id | DELETE PUT | JSON     | employee |

Example Request

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

{
    "name":"Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB",
    "desc":"Meta Quest 2 is the all-in-one system that truly sets you free to explore in VR. Simply put on the headset and enter fully-immersive, imagination-defying worlds. A built-in battery, fast processor and immersive graphics keep your experience smooth and seamless, while 3D positional audio, hand tracking and easy-to-use controllers make virtual worlds feel real. Meet, play and build communities with people from all over the world. Start an epic new adventure, squad up with friends or add more fun to your fitness routine. Invite others into your VR experience by screen-casting to a compatible TV or screen as it unfolds. See child safety guidance online; Accounts for 10+.",
    "brand": "Meta",
    "price": 4936140,
    "category": ["Electronics", "VR"],
    "stock": 100,
    "image": "https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SL1500_.jpg",
    "rate": 4.7
}
```

// Manager account for testing purpose

{
"email": "Dat.NDT215562@sis.hust.edu.vn",
"password": "1234567890"
}

{
"userId": "664cc642e3de3cee7ce68cb3",
"cartItems": [{
"id": "66125699a6aeb7c988b75e06",
"quantity" : 2
},
{
"id": "66134c4c5e06ddba8e42df76",
"quantity" : 4
}]
}
