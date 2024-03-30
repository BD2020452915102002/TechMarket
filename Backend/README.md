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