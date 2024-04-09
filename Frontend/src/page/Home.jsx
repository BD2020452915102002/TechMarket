import Slide from "../component/Slide.jsx";
import Sale from "../component/Sale.jsx";
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import Content from "../component/Content.jsx";
import Provider from "../store/Provider.jsx";

function Home() {
    return (
        <Provider>
            <div className={'mx-20'}>
                <Navbar/>
                <Slide/>
                <Sale/>
                <Content/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default Home;