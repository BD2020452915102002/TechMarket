import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
function Slide() {
    const slider = [
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png",
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png", "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png",
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png", "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png",
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png", "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png",
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png", "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/BANNER_RUN_IN_TO_THE_WILD_(2).png",
        "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/March2024/VUN_ART_BANNER.png",
    ]

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <div className={'slider-container'}>
            <Slider {...settings} className={''}>
                {
                    slider.map((e,i)=>(
                        <Link to={'/'} key={i} className={''}>
                            <img src={e} alt="" className={''}/>
                        </Link>
                    ))
                }
            </Slider>
        </div>
    );
}

export default Slide;