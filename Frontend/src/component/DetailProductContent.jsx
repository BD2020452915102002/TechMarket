import React, {useContext, useEffect, useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {Link} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {TbBoxMultiple} from "react-icons/tb";
import {Carousel} from "react-responsive-carousel";
import {Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import eventEmitter from "../utils/eventEmitter.js";
import {useSelector} from "react-redux";


function DetailProductContent() {
    const [product, setProduct] = useSelector(state => state.products.data)
    const [more, setMore] = useState({
            desc: [
                'đẹp quá',
                'chip mạnh',
                'rất nhiều thứ khác'
            ],
            option: [
                {
                    color: 'blue',
                    price: 1000,
                },
                {
                    color: 'red',
                    price: 2000,
                },
                {
                    color: 'green',
                    price: 3000,
                },

            ]
        }
    )
    const [count, setCount] = useState(0)

    function addCount() {
        setCount(count + 1)
    }

    function subCount() {
        setCount(count - 1)
    }


    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const discountedPrice = product.price * (100 - parseFloat(product.sale)) / 100

    function addShoppingCart() {
    eventEmitter.emit('addShoppingCart', {
        id:product.id,
        quantity:count
    })
    }

    return (
        <div className={'  mt-24'}>
            <div className={'flex items-center text-[#BCBCBC] font-medium '}>
                <Link to={'/'} className={'flex items-center'}> <AiOutlineHome className={'mr-2'}/>Trang chủ</Link>
                <FaAngleRight/>
                <h1 className={'px-2 text-black '}>
                    {product.name}
                </h1>
            </div>
            <div className={'flex mt-4'}>
                <div className={'basis-[50%]'}>
                    <img src={product.images} alt="" className={'bg-cover bg-no-repeat bg-center w-[90%] '}/>
                </div>
                <div className={'basis-[50%]'}>
                    <h1 className={'font-bold text-2xl '}>{product.name}</h1>
                    <p className={'mb-4'}> Thương hiêu: <span> {product.brand}</span></p>

                    <p className={'text-gray-600 line-clamp-1 italic mb-4'}>{product.desc}</p>
                    {
                        product.sale ?
                            <div>
                                <div className={' text-start'}>
                                    <p className={'text-gray-500  font-normal'}>
                                            <span
                                                className={'line-through'}> {formatNumber(product.price)}<span>đ</span></span>
                                        <span className={'text-red-600 ml-2'}>-{product.sale}</span>
                                    </p>
                                    <p className={'text-black text-xl font-medium'}>
                                        {formatNumber(discountedPrice)}
                                        <span className={' text-lg'}>đ</span>
                                    </p>
                                </div>
                            </div> :
                            <p className={'text-black text-xl font-medium'}>
                                {formatNumber(product.price)}
                                <span className={'text-lg'}>đ</span>
                            </p>
                    }
                    <div className={'flex items-center mt-8'}>
                        <p className={'mr-10'}>Số lượng</p>
                        <Button variant="outlined" onClick={subCount} className={'!min-w-0'} disabled={count < 1}>-</Button>
                        <div className={'px-4'}>{count}</div>
                        <Button variant="outlined" onClick={addCount} className={'!min-w-0'} disabled={count >= product.stock}>+</Button>
                        <h1 className={'ml-4'}>Còn: {product.stock}</h1>

                    </div>
                  <div className={'grid grid-cols-[50%,50%] mt-8 gap-3'}>
                      <Button variant="contained" startIcon={<AddShoppingCartIcon />} disabled={count <1} onClick={addShoppingCart}>Thêm vào giỏ hàng</Button>
                      <Button variant="contained" disabled={count <1}>Mua ngay</Button>
                  </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default DetailProductContent;