import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox } from "@mui/material";
import eventEmitter from "../utils/eventEmitter.js";
import { Link } from "react-router-dom";


function Cart() {

    const products = useSelector(state => state.products.data)
    const { storedCart } = JSON.parse(localStorage.getItem('session')) || [];
    const [productsWithQuantity, setProductsWithQuantity] = useState();
    useEffect(() => {
        const arr = products.filter(product => {
            return storedCart.some(item => item.id === product._id);
        }).map(e => {
            let matchingObj = storedCart.find(objB => objB.id === e._id);
            return { ...e, quantity: matchingObj.quantity };
        })
        setProductsWithQuantity(arr)
        eventEmitter.emit('load_done')
    }, [products])
    let count;
    let numberOfProductsPurchased;
    let totalPayment;
    function subCount() {
        setProductsWithQuantity(prevState => {
            const newState = { ...prevState };
            newState.quantity -= 1;
            // Trả về state mới
            return newState;
        });
    }


    function addCount() {

    }

    return (
        <div className={'mt-20'}>
            <div>
                <h1 className={'pt-8 text-2xl font-bold uppercase '}>Giỏ hàng</h1>
                <div className={'mt-4 max-h-[450px]'}>
                    {
                        productsWithQuantity?.map((e, i) => (
                            <div key={i}
                                className={'grid   my-4 py-4 bg-white border-[1px] border-gray-200  grid-cols-[45%,20%,35%] gap-6'}>
                                <div className={'flex items-center justify-start'}>
                                    <div className={'flex items-center'}>
                                        <Checkbox defaultChecked />
                                        <img src={e?.image?.url} alt=""
                                            className={'bg-cover bg-no-repeat bg-center w-20 h-20 mr-4'} />
                                        <p className={'!line-clamp-2 '}>{e.name}</p>
                                    </div>
                                </div>
                                <p className={'flex items-center justify-center'}>{e.price}đ</p>
                                <div className={'flex items-center justify-center'}>
                                    <div className={'flex items-center'}>
                                        <div className={'flex items-center relative mr-4'}>
                                            <p className={'mr-10'}>Số lượng</p>
                                            <Button variant="outlined" onClick={subCount} className={'!min-w-0'}
                                                disabled={e.quantity < 1}>-</Button>
                                            <div className={'px-4'}>{e.quantity}</div>
                                            <Button variant="outlined" onClick={addCount} className={'!min-w-0'}
                                                disabled={e.quantity >= e?.stock}>+</Button>
                                            <h1 className={'ml-4 absolute  top-[120%] left-1/2'}>Còn: {e?.stock}</h1>
                                        </div>
                                        <Button variant="contained" color="error"> Xoá</Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={'flex items-center justify-between mt-10 mb-20'}>
                    <div className={'flex items-center '}>
                        <Button variant="contained" className={'!mr-3 !min-w-[150px]'}>Chọn tất cả</Button>
                        <Button variant="outlined" className={'!min-w-[150px]'}>Xoá tất cả</Button>
                    </div>
                    <div className={'flex items-center'}>
                        <div>Tổng thanh toán ({numberOfProductsPurchased} Sản phẩm):</div>
                        <div className={''}>{totalPayment} <span className={''}>đ</span></div>
                    </div>
                    <Link to="/checkout"><Button variant="contained" className={'!min-w-[150px]'}>Mua</Button></Link>
                </div>

            </div>
        </div>
    );
}

export default Cart;