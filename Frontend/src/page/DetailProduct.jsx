import {OnceProduct} from "../store/Provider.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import DetailProductContent from "../component/DetailProductContent.jsx";
import Comment from "../component/Comment.jsx";


function DetailProduct() {
    return (
        <OnceProduct>
            <Navbar/>
            <DetailProductContent/>
            <Comment/>
            <Footer/>
        </OnceProduct>

    );
}

export default DetailProduct;