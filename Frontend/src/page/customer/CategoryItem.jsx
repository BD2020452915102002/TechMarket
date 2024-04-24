import React, {useReducer} from 'react';
import {useParams} from "react-router-dom";
import Reducer, {initState} from "../../store/Reducer.jsx";
import Content from "../../component/Content.jsx";
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import {useSelector} from "react-redux";

function CategoryItem() {
    const {categoryID} = useParams();

    const products = useSelector(state => state.products.data).filter(p => p.category.includes(categoryID))
    console.log(products)

    return (
        <div className={'bg-gray-50 '}>
            <div className={'mx-20'}>
                <Navbar/>
                <h1 className={'mt-28 -mb-12 font-medium italic'}>Bạn đang tìm kiếm <span
                    className={'text-blue-500 ml-2 text-xl'}>{categoryID}</span></h1>
                <Content priceShow={true} brandShow={true} saleShow={true} categoryShow={false} stockShow={true}
                         product={products}/>
                <Footer/>
            </div>
        </div>
    );
}

export default CategoryItem;