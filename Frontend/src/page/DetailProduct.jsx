import {OnceProduct} from "../store/Provider.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import DetailProductContent from "../component/DetailProductContent.jsx";


function DetailProduct() {
    return (
        <OnceProduct>
            <Navbar/>
            <DetailProductContent/>
            <Footer/>
        </OnceProduct>

    );
}

export default DetailProduct;