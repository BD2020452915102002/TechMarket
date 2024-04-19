import React, {useReducer} from 'react';
import {useParams} from "react-router-dom";
import Reducer, {initState} from "../store/Reducer.jsx";
import Content from "../component/Content.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

function CategoryItem() {
    const { categoryID } = useParams();
    const [products, dispatch] = useReducer(Reducer, initState.data.filter(e=>{return e.category === categoryID}))
    console.log(products)
    return (
        <div className={'mx-20'}>
            <Navbar/>
            <h1 className={'mt-28 -mb-12 font-medium italic'}>Bạn đang tìm kiếm <span className={'text-blue-500 ml-2 text-xl'}>{categoryID}</span></h1>
            <Content priceShow={true} brandShow={true} saleShow={true} categoryShow={false} stockShow={true} product={products} />
            <Footer/>
        </div>
    );
}

export default CategoryItem;