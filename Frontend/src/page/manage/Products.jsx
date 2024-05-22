import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber.js";
import { useSelector } from "react-redux";
import ModalEditProduct from "../../component/ModalEditProduct.jsx";
import ModalCreateProduct from "../../component/ModalCreateProduct.jsx";
import ModalViewProduct from "../../component/ModalViewProduct.jsx";

function Products() {
    const products = useSelector(state => state.products.data);

    const ProductCart = () => {
        if (products?.length !== 0)
            return products.map((e, i) => (
                <div key={i} className={'grid mb-4 py-4 bg-white border-[1px] border-gray-200 grid-cols-[auto,15%,15%,20%] '}>
                    <div className={'flex items-center justify-start'}>
                        <div className={'flex items-center'}>
                            <a href={`/products/${e._id}`} target={'_blank'} className={'flex items-center'}>
                                <img src={e?.image?.url} alt=""
                                     className={'bg-cover bg-no-repeat bg-center w-20 h-20 mx-4'} />
                                <p className={'!line-clamp-2 '}>{e.name}</p>
                            </a>
                        </div>
                    </div>
                    <p className={'flex items-center justify-center'}>{formatNumber(e.price)}đ</p>
                    <p className={'flex items-center justify-center'}>{e.stock}</p>
                    <div className={'flex items-center justify-end'}>
                        <div className={'flex items-center space-x-2 mx-2'}>
                            <ModalViewProduct/>
                            <ModalEditProduct/>
                            <Button variant="contained" color="error" className={'min-h-[40px] !w-[60px] !text-[12px]'}>Xóa</Button>
                        </div>
                    </div>
                </div>
            ));
        else return (
            <div className={'h-[300px] flex bg-white items-center justify-center font-medium text-2xl italic text-red-600'}>
                Không có sản phẩm nào đang bán!
            </div>
        );
    };

    return (
        <div className={''}>
            <div>
                <h1 className={'text-lg font-bold uppercase '}>Tất cả sản phẩm đang bán</h1>
                <div className={'w-full grid  mt-2 grid-cols-[auto,15%,15%,20%] text-gray-400 ' }>
                    <div className={'flex items-center'}>
                        <p className={'ml-4 text-center'}>Hình ảnh</p>
                        <p className={'ml-28 text-center'}>Tên sản phẩm</p>
                    </div>
                    <div className={'flex items-center justify-center'}>
                        <p className={''}>Giá</p>
                    </div>
                    <div className={'flex items-center justify-center'}>
                        <p className={'text-center'}>Tồn kho</p>
                    </div>
                    <div className={'flex items-center justify-end'}>
                      <ModalCreateProduct/>
                   </div>
                </div>
                <div className={'mt-4 h-[calc(100vh-201px)] overflow-y-auto custom-scroll'}>
                    <div><ProductCart /></div>
                </div>
            </div>
        </div>
    );
}

export default Products;
