import React, {useContext, useEffect, useState} from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {Link} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {TbBoxMultiple} from "react-icons/tb";
import {Carousel} from "react-responsive-carousel";
import {Breadcrumbs, Button, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import eventEmitter from "../utils/eventEmitter.js";
import {useSelector} from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext.js";
import HomeIcon from "@mui/icons-material/Home.js";


function DetailProductContent({product}) {
    const [productShow, setProductShow] = useState(product)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setProductShow(product)
        setCount(0)
    }, [product]);

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

    function addCount() {
        setCount(count + 1)
    }

    function subCount() {
        setCount(count - 1)
    }


    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const discountedPrice = productShow?.price * (100 - parseFloat(productShow?.sale)) / 100

    function addShoppingCart() {
    eventEmitter.emit('addShoppingCart', {
        id:productShow._id,
        quantity:count
    })
    }

    return (
        <div className={' mt-20'}>
            <Breadcrumbs maxItems={3}  separator={<NavigateNextIcon fontSize="small" />}
                          aria-label="breadcrumb" className={'!mt-[80px] cursor-pointer pt-5'}>
                <Link className={'hover:underline'} color="inherit" to="/">
                    <div  className={'flex items-center'}>
                        <HomeIcon className={'mr-2'}/><div>Trang chủ</div>
                    </div>
                </Link>
                <Typography color="text.primary" className={'line-clamp-1 w-[300px]'}>{productShow.name}</Typography>
            </Breadcrumbs>
            <div className={'flex mt-4'}>
                <div className={'basis-[50%]'}>

                    <img src={productShow?.image?.url} alt="" className={'bg-cover bg-no-repeat bg-center w-[90%] '}/>
                </div>
                <div className={'basis-[50%]'}>
                    <h1 className={'font-bold text-2xl '}>{productShow?.name}</h1>
                    <p className={'mb-4'}> Thương hiêu: <span> {productShow?.brand}</span></p>

                    <p className={'text-gray-600 line-clamp-1 italic mb-4'}>{productShow?.desc}</p>
                    {
                        productShow?.sale ?
                            <div>
                                <div className={' text-start'}>
                                    <p className={'text-gray-500  font-normal'}>
                                            <span
                                                className={'line-through'}> {formatNumber(productShow.price)}<span>đ</span></span>
                                        <span className={'text-red-600 ml-2'}>-{productShow?.sale}</span>
                                    </p>
                                    <p className={'text-black text-xl font-medium'}>
                                        {formatNumber(discountedPrice)}
                                        <span className={' text-lg'}>đ</span>
                                    </p>
                                </div>
                            </div> :
                            <p className={'text-black text-xl font-medium'}>
                                {formatNumber(productShow.price)}
                                <span className={'text-lg'}>đ</span>
                            </p>
                    }
                    <div className={'flex items-center mt-8'}>
                        <p className={'mr-10'}>Số lượng</p>
                        <Button variant="outlined" onClick={subCount} className={'!min-w-0'} disabled={count < 1}>-</Button>
                        <div className={'px-4'}>{count}</div>
                        <Button variant="outlined" onClick={addCount} className={'!min-w-0'} disabled={count >= productShow?.stock}>+</Button>
                        <h1 className={'ml-4'}>Còn: {productShow?.stock}</h1>

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