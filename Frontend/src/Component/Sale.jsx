import React, {useContext} from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import Card from "./Card.jsx";
import { ProductContext } from '../Page/Home.jsx';

function Sale() {
    const products = useContext(ProductContext);
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 3);

// Cập nhật đồng hồ đếm ngược mỗi giây
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = targetTime - currentTime;

        // Tính toán giờ, phút và giây
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Hiển thị thời gian đếm ngược ở dạng hai chữ số
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Hiển thị thời gian đếm ngược trong phần tử HTML
        document.getElementById('countdown').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        // Khi đến thời gian đích, dừng đồng hồ đếm ngược
        if (remainingTime <= 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerText = '00:00:00';
        }
    }, 1000)

    return (
        <div className={'mt-10'}>
            <div className={'flex justify-start items-center'}>
                <BoltIcon className={'text-yellow-400 scale-150 mx-4'}/>
                <div className={'font-bold text-2xl text-red-600'}>GIẢM GIÁ CỰC SỐC
                </div>
                <span className={'text-lg  font-medium text-gray-500 ml-5'}>Cập nhật sau: </span>
                <span id={'countdown'} className={'font-bold text-lg text-black ml-2'}></span>
            </div>
            <div className={'carousel carousel-center w-full'}>
                {products.map((e, i) => (
                    <div key={i} className={'carousel-item'}>
                    <Card  product={e} className={''}/>
                   </div>
                ))}
            </div>

        </div>
    );
}

export default Sale;