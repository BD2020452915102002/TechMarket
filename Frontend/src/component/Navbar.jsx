import React, {useEffect, useState} from "react";
import {FaRegUser} from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import eventEmitter from "../utils/eventEmitter.js";
import {connect, useDispatch, useSelector} from "react-redux";
import {getActions, logout} from "../store/actions/authActions.js";
import {productApi} from "../../api/productApi.js";
import {fetchData} from "../store/actions/productsAction.js";
import {deleteAll} from "../store/actions/cartAction.js";

function Navbar({userDetails}) {
    const product = useSelector(state => state.products.data)
    const dispatch = useDispatch()
    const {isLoggedIn} = JSON.parse(localStorage.getItem('session')) || {isLoggedIn: false}
    const cart = useSelector(state => state.cart.data)
    const category = product?.map(e => (e.category)).flat().filter((value, index, self) => self.indexOf(value) === index) || []
    const [isHover, setIsHover] = useState(false);
    const categoryArr = category?.filter((e, i) => {
        return i < 5;
    });

    function logoutX() {
        dispatch(logout())
        dispatch(deleteAll())
        localStorage.removeItem('session');
    }

    return (
        <div
            className="fixed flex bg-[#231f20] right-0 left-0 top-0 z-20 h-[80px] text-white items-center justify-between hover:cursor-pointer">
            <div className="flex items-center">
                <div className="hidden max-lg:block">
                    <MenuIcon/>
                </div>
                <a
                    href={"/"}
                    className="font-extrabold text-2xl ml-16 p-3  hover:bg-white  hover:text-black  "
                >
                    TECH MARKET
                </a>

                <div className=" ml-[160px] flex items-center ">
                    <div
                        className={`p-6 font-bold text-xl relative hover:scale-110  `}
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        TẤT CẢ
                        <div
                            className={`absolute bg-white   ${
                                isHover ? "block" : "hidden"
                            }  grid grid-rows-4 grid-flow-col -translate-x-1/2  left-1/2  top-[60px]   shadow-[0px_0px_20px] shadow-gray-500 `}
                        >
                            {category.map((e, i) => (
                                <Link
                                    to={`/category/${e}`}
                                    key={i}
                                    className={
                                        "text-black font-medium text-[12px] text-center hover:bg-[#231f20] hover:text-white  p-2 w-24 line-clamp-1"
                                    }
                                >
                                    {e}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {categoryArr?.map((e, i) => (
                        <Link
                            to={`/category/${e}`}
                            key={i}
                            className="mx-2 font-medium p-4 hover:scale-110"
                        >
                            {e}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center mr-16  ">
                <Link to={"/cart"} className="indicator mx-8 hover:scale-110 ">
                    <ShoppingCartIcon className={"!text-3xl"}/>
                    <span className="badge badge-sm indicator-item">{cart.length}</span>
                </Link>

                <div className="dropdown dropdown-end ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar "
                    >
                        <FaRegUser className={"text-3xl"}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  z-[1]   bg-white  w-52 text-black  shadow-[0px_0px_20px] shadow-gray-500 !p-0 "
                    >
                        {!isLoggedIn ? (
                            <li>
                                <Link
                                    to={"/login"}
                                    className={
                                        "!rounded-none text-black font-medium text-[12px] text-center hover:!bg-[#231f20] hover:!text-white  p-2  "
                                    }
                                >
                                    Đăng nhập
                                </Link>
                            </li>
                        ) : (
                            <div>
                                <li>
                                    <Link
                                        to={"/infor"}
                                        className={
                                            "!rounded-none text-black font-medium text-[12px] text-center hover:!bg-[#231f20] hover:!text-white  p-2   "
                                        }
                                    >
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/orderstatus"}
                                        className={
                                            "!rounded-none text-black font-medium text-[12px] text-center hover:!bg-[#231f20] hover:!text-white  p-2   "
                                        }
                                    >
                                        Đơn hàng của bạn
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        onClick={logoutX}
                                        className={
                                            "!rounded-none text-black font-medium text-[12px] text-center hover:!bg-[#231f20] hover:!text-white  p-2  "
                                        }
                                    >
                                        Đăng xuất
                                    </a>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const mapStoreStateToProps = ({auth, dispatch}) => {
    return {
        ...auth,
        ...getActions(dispatch),

    };
};

export default connect(mapStoreStateToProps)(Navbar);
