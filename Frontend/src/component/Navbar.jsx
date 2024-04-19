import React, {useState} from 'react';
import {FaRegUser} from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navbar() {
    const [cart, addToCart] = useState([
        {
            id: 5,
            quantity: 3
        },

    ])
    const category = [

        'Điện thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',

    ]
    const [isHover, setIsHover] = useState(false)
    const categoryArr = category.filter((e, i) => {
        return i < 5
    })
    return (
        <div
            className="fixed flex bg-[#231f20] right-0 left-0 top-0 z-20 h-[80px] text-white items-center justify-between hover:cursor-pointer">
            <div className='flex items-center'>
                <div className='hidden max-lg:block'><MenuIcon/></div>
                <Link to={'/'} className="font-extrabold text-2xl ml-16 p-3  hover:bg-white  hover:text-black  ">TECH
                    MARKET</Link>

                <div className=" ml-[160px] flex items-center ">
                    <div className={`p-6 font-bold text-xl relative hover:scale-110  `} onMouseOver={() => setIsHover(true)}
                         onMouseLeave={() => setIsHover(false)}>TẤT CẢ
                        <div
                            className={`absolute bg-white   ${isHover ? 'block' : 'hidden'}  grid grid-rows-4 grid-flow-col -translate-x-1/2  left-1/2  top-[60px]   shadow-[0px_0px_20px] shadow-gray-500 `}>
                            {category.map((e, i) => (
                                <Link to={`/category/${e}`} key={i}
                                      className={'text-black font-medium text-[12px] text-center hover:bg-[#231f20] hover:text-white  p-2 w-28 '}>
                                    {e}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {
                        categoryArr.map((e, i) => (
                            <Link to={`/category/${e}`} key={i} className='mx-2 font-medium p-4 hover:scale-110'>{e}</Link>
                        ))

                    }
                </div>
            </div>
            <div className='flex items-center mr-16  '>
                <div className="indicator mx-8 hover:scale-110 " >
                    <ShoppingCartIcon className={'!text-3xl'}/>
                    <span className="badge badge-sm indicator-item">{cart.length}</span>
                </div>

                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                        <FaRegUser className={'text-3xl'}/>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><a>Đăng nhập</a></li>
                        <li><a>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;