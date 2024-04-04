import Slide from "../Component/Slide.jsx";
import Sale from "../Component/Sale.jsx";
import Navbar from "../Component/Navbar.jsx"
import Footer from "../Component/Footer.jsx"
import { createContext } from "react";

const ProductContext = createContext();

function Home() {
    const products = [
        {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        }, {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        }, {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        }, {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        }, {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.D_lFETM0JosUnl0dyjYsnQHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'
        }, {
            name: 'IP 15',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.LyVr2gLJRZLG5gYXAYRfCgHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },{
            name: 'Sạc dự phòng OPO',
            desc: 'Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới Thiết kế sang trọng, kiểu dáng mới',
            brand: 'Apple',
            price: 32000000,
            sale: '15%',
            category: 'Điện thoại',
            stock: 5,
            images: 'https://th.bing.com/th/id/OIP.CLQyvU9pmkqmJwbUe9eyfQHaE7?w=300&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        },
    ]

    return (
        <div>
            <ProductContext.Provider value={products}>
                <div className={'mx-20'}>
                    <Navbar />
                    <Slide />
                    <Sale />

                    <Footer />
                </div>
            </ProductContext.Provider>
        </div>

    );
}

export { Home, ProductContext };