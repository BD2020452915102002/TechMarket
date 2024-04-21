import React, {useContext, useEffect, useState} from 'react';
import {Products} from "../store/Products.jsx";
import { DataGrid } from '@mui/x-data-grid';


function Cart() {
    const products = useContext(Products)[0].data
    const [productsWithQuantity, setProductsWithQuantity] = useState([]);

    useEffect(() => {
        const {storedCart} = JSON.parse(localStorage.getItem('session')) || [];
         setProductsWithQuantity (()=> products.filter(product => {
           return   storedCart.some(item => item.id === product.id);
        }).map(e=>{
             let matchingObj = storedCart.find(objB => objB.id === e.id);
             return { ...e, quantity: matchingObj.quantity };
         }))
    }, [products]);
    // const rows = [
    //     { id: 1, col1: {<span className={'bg-black'}> aaaa</span>}, col2: 'World' },
    //     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //     { id: 3, col1: 'MUI', col2: 'is Amazing' },
    // ];
    //
    // const columns = [
    //     { field: 'col1', headerName: 'Column 1', width: 150 },
    //     { field: 'col2', headerName: 'Column 2', width: 150 },
    // ];
    return (
        <div className={'mt-20 '}>
            <div>
                <div style={{height: 300, width: '100%'}}>
                    <DataGrid rows={rows} columns={columns}/>
                </div>
            </div>
        </div>
    );
}

export default Cart;