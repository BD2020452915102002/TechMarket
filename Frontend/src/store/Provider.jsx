import React, {useReducer} from 'react';
import {Products,Product} from "./Products.jsx";
import Reducer, {initState} from "./Reducer.jsx";
import {useParams} from "react-router-dom";

function AllProduct({children}) {
    const [state, dispatch] = useReducer(Reducer, initState)
    return (
        <Products.Provider value={[state, dispatch]}>
            {children}
        </Products.Provider>
    );
}
function OnceProduct({children}) {
    const { productID } = useParams();
    const [state, dispatch] = useReducer(Reducer, initState.data.filter(e=>{return e.id === parseInt(productID)})[0])
    return (
        <Product.Provider value={[state, dispatch]}>
            {children}
        </Product.Provider>
    )
}
export {AllProduct,OnceProduct};