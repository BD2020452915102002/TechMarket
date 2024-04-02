import React, {useContext} from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import Card from "./Card.jsx";
import { ProductContext } from '../Page/Home.jsx';

function Sale() {
    const products = useContext(ProductContext);

    return (
        <div className={'mt-10'}>
           <div className={'flex justify-start items-center'}>
               <BoltIcon className={'text-yellow-400 scale-150 mx-4'}/>
               <div className={'font-bold text-2xl text-red-600'}>GIẢM GIÁ CỰC SỐC<span className={'text-lg  font-medium text-gray-500 ml-5'}>Cập nhật sau :</span><span id={'time'}></span></div>
           </div>
            <div>
                {products.map((e,i)=>(
                    // <Card key={i}/>
                    <div key={i}><button onClick={()=>{
                        console.log(products)
                        console.log(e)
                    }
                    }>click and see</button></div>
                ))}
            </div>

        </div>
    );
}

export default Sale;