import React, {useContext, useEffect} from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import Card from "./Card.jsx";
import Context from "../store/Context.jsx";

function Sale() {
    const productsSale = useContext(Context)[0].data.filter((e) => {
        return e.sale !== ''
    });
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 3);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const remainingTime = targetTime - currentTime;

            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            document.getElementById('countdown').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            if (remainingTime <= 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerText = '00:00:00';
            }
        }, 1000)

    }, []);


    return (
        <div className={'mt-20'}>
            <div className={'flex justify-start items-center'}>
                <BoltIcon className={'text-yellow-400 scale-150 mx-4'}/>
                <div className={'font-bold text-2xl text-red-600'}>GIẢM GIÁ CỰC SỐC
                </div>
                <span className={'text-lg  font-medium text-gray-500 ml-5'}>Cập nhật sau: </span>
                <span id={'countdown'} className={'font-bold text-lg text-black ml-2'}></span>
            </div>
            <div className={'carousel carousel-center w-full'}>
                {productsSale.map((e, i) => (
                    <div key={i} className={'carousel-item m-2'}>
                        <Card product={e} className={''}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Sale;