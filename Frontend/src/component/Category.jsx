import React, {useContext, useState} from 'react';
import Context from "../store/Context.jsx";

function Category() {
    const [product, setProduct] = useState(useContext(Context)[0].data)

    const category = product.map(e => (e.category)).filter((value, index, self) => self.indexOf(value) === index)
    const arr = []
    for (let i=0;i<50;i++){
       arr.push(category[0])
    }
    console.log(arr)
    return (
        <div className={' mt-20 '}>
            <h1 className={'text-2xl font-bold text-start mb-4'}>DANH MỤC</h1>
            <div className={'grid grid-rows-2 grid-flow-col gap-2 carousel'}>
                {
                    arr.map((e,i)=>(
                        <div key={i}>
                            <img src="" alt="" className={'h-20 w-20 bg-gray-400 hover:outline hover:outline-1 hover:outline-gray-500 '}/>
                            <h1>{e}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Category;