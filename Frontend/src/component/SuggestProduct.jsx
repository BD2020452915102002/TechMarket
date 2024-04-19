import React from 'react';
import Card from "./Card.jsx";
import {initState} from "../store/Reducer.jsx";

function SuggestProduct() {
    const productsSuggest = initState.data
    return (
        <div className={'mt-10'}>
            <div className={'font-medium text-xl text-start'}>Gợi ý cho bạn</div>
            <div className={'carousel carousel-center w-full'}>
                {productsSuggest.map((e, i) => (
                    <div key={i} className={'carousel-item m-2'}>
                        <Card product={e} className={''}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SuggestProduct;