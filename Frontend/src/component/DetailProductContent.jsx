import React, {useContext, useState} from 'react';
import {Product} from "../store/Products.jsx";

function DetailProductContent() {
    const [product,setProduct] = useState(useContext(Product)[0])
    console.log(product)
    return (
        <div>

        </div>
    );
}

export default DetailProductContent;