import {Link} from "react-router-dom";

function Card({product}) {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const discountedPrice = product.price * (100 - parseFloat(product.sale)) / 100

    return (
        <Link to={'/'}>
            <div
                className="card w-80 glass hover:scale-[102%] m-4  card-compact bg-base-100 shadow-[0px_0px_8px] shadow-gray-300">
                <figure className="h-[300px]"
                        style={{
                            backgroundImage: `url(${product.images})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold ">{product.name}</h2>
                    <p className={'text-gray-600 line-clamp-1 mt-[-12px]'}>{product.desc}</p>
                    <div className={'mt-4'}>

                        {
                            product.sale ? <div>
                                <div className={'text-lg text-start'}>
                                    <p className={'text-gray-500  font-normal'}>
                                    <span className={'line-through'}> {formatNumber(product.price)}
                                        <span>đ</span></span>
                                        <span className={'text-red-600 ml-3'}>-{product.sale}</span>
                                    </p>
                                    <p className={'text-black text-2xl'}>
                                        {formatNumber(discountedPrice)}
                                        <span className={' text-lg'}>đ</span>
                                    </p>
                                </div>
                            </div> : <p className={'text-black text-2xl font-bold'}>
                                {formatNumber(product.price)}
                                <span className={'text-lg'}>đ</span>
                            </p>

                        }
                    </div>
                </div>
            </div>
        </Link>
    )
        ;
}

export default Card;