import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox} from "@mui/material";
import {
    checkAllItems, checkItem,
    decreaseCartItemQuantity, deleteAll,
    deleteCart,
    increaseCartItemQuantity, uncheckAllItems
} from "../store/actions/cartAction.js";
import {Link} from "react-router-dom";
import {formatNumber} from "../utils/formatNumber.js";


function Cart() {
    const productsWithQuantity = useSelector(state => state.cart.data)
    const [numberOfProductsPurchased,setNumberOfProductsPurchased] = useState(0)
    const [totalPayment,setTotalPayment] = useState(0)
    const [isCheckedAll, setIsCheckAll] = useState(true);
    const dispatch= useDispatch()

    useEffect(() => {
       const arr = productsWithQuantity.filter(e=>{return e.checked})
        const isCheckAll = arr.length === productsWithQuantity.length
        const totalPrice = arr.reduce((total, item) => {
            return total + item.price;
        }, 0);
        isCheckAll? setIsCheckAll(true):setIsCheckAll(false)
        setNumberOfProductsPurchased(arr.length)
        setTotalPayment(totalPrice)
    }, [productsWithQuantity]);

    function subCount(i) {
        dispatch(decreaseCartItemQuantity(i))
    }
    function addCount(i) {
        dispatch(increaseCartItemQuantity(i))
    }

    function deleteProduct(i) {
        dispatch(deleteCart(i))
    }
    function handleCheckAllItems() {
        dispatch(checkAllItems());
    }
    function handleUnCheckAllItems() {
        dispatch(uncheckAllItems());
    }
    function handleCheckItem(id, checked) {
        dispatch(checkItem(id, checked));
    }
    function handleDeleteAllItem() {
        dispatch(deleteAll())
    }
    const ProductCart = () => {
        if (productsWithQuantity?.length !== 0)
            return productsWithQuantity?.map((e, i) => (
                <div key={i} className={'grid my-4 py-4 bg-white border-[1px] border-gray-200  grid-cols-[auto,20%,35%] gap-6'}>
                    <div className={'flex items-center justify-start'}>
                        <div className={'flex items-center'}>
                            <Checkbox checked={e.checked} onChange={()=>handleCheckItem(e?._id,!e?.checked)}/>
                            <Link to={`/products/${e._id}`} className={'flex items-center'}>
                                <img src={e?.image?.url} alt=""
                                     className={'bg-cover bg-no-repeat bg-center w-20 h-20 mr-4'}/>
                                <p className={'!line-clamp-2 '}>{e.name}</p>
                            </Link>
                        </div>
                    </div>
                    <p className={'flex items-center justify-center'}>{e.price}đ</p>
                    <div className={'flex items-center justify-center'}>
                        <div className={'flex items-center'}>
                            <div className={'flex items-center relative mr-4'}>
                                <p className={'mr-10'}>Số lượng</p>
                                <Button variant="outlined" onClick={() => subCount(e._id)} className={'!min-w-0'}
                                        disabled={e.quantity < 1}>-</Button>
                                <div className={'px-4'}>{e.quantity}</div>
                                <Button variant="outlined" onClick={() => addCount(e._id)} className={'!min-w-0'}
                                        disabled={e.quantity >= e?.stock}>+</Button>
                                <h1 className={'ml-4 absolute  top-[120%] left-1/2'}>Còn: {e?.stock}</h1>
                            </div>
                            <Button variant="contained" color="error" onClick={() => deleteProduct(e._id)}> Xoá</Button>
                        </div>
                    </div>
                </div>
            ))
        else return <div
            className={'h-[300px] flex bg-white items-center justify-center font-medium text-2xl italic text-red-600'}>
            Không có sản phẩm nào trong giỏ hàng!
        </div>
    }


    return (
        <div className={'mt-20'}>
            <div>
                <h1 className={'pt-8 text-2xl font-bold uppercase '}>Giỏ hàng</h1>
                <div className={'mt-4 max-h-[480px]  overflow-y-auto '}>
                    <div><ProductCart/></div>
                </div>
                <div className={'flex items-center justify-between mt-10 mb-20'}>
                    <div className={'flex items-center '}>
                        {
                            isCheckedAll ?
                                <Button variant="contained" className={'!mr-3  !min-w-[170px]'} onClick={handleUnCheckAllItems}>Huỷ chọn tất cả</Button>
                                :
                            <Button variant="contained" className={'!mr-3  !min-w-[170px]'} onClick={handleCheckAllItems}>Chọn tất cả</Button>

                        }
                        <Button variant="outlined" className={'!max-w-[170px]'} onClick={handleDeleteAllItem}>Xoá mục đã chọn</Button>
                    </div>
                    <div className={'flex items-center'}>
                        <div>Tổng thanh toán ({numberOfProductsPurchased} Sản phẩm):</div>
                        <div className={'font-medium text-xl ml-5'}>{formatNumber(totalPayment)} <span className={''}>đ</span></div>
                    </div>
                    <Button variant="contained" className={'!min-w-[150px]'}>Mua</Button>
                </div>

            </div>
        </div>
    );
}

export default Cart;