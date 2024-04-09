import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const category = [
        'Điện Thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện Thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện Thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',
        'Điện Thoại',
        'Laptop',
        'Smart Watch',
        'Tai Nghe',

    ]
    const [isHover, setIsHover] = useState(false)
    const categoryArr = category.filter((e, i) => {
        return i < 5
    })
    return (
        <div className="fixed flex bg-black right-0 left-0 top-0 z-20 h-[80px] text-white items-center justify-between hover:cursor-pointer">
            <div className='flex items-center'>
                <div className='hidden max-lg:block'><MenuIcon /></div>
                <div className="font-bold text-2xl ml-4  ">TECH MARKET</div>

                <div className=" ml-4 flex items-center w-[60vw]" >
                    <div className={`mx-3 font-bold text-xl `} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                    >Tất cả
                        <div className={`absolute bg-slate-400 w-20 h-20 top-[80px]  ${isHover ? 'block' : 'hidden'}`} >Hello World</div>
                    </div>
                    {
                        categoryArr.map((e, i) => (
                            <div key={i} className='mx-2 font-bold' >{e}</div>
                        ))

                    }
                </div>
            </div>
            <div className=''>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                        <FaRegUser />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        <li><a>Đăng nhập</a></li>
                        <li><a>Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Navbar;