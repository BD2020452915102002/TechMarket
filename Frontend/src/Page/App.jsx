import Login from "./Login.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import CreateAccount from "./CreateAccount.jsx";


export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api')
            .then(response => setData(response.data));
        console.log(data)
    }, []);
    return (
        <div className={'bg-gradient-to-tl from-[#83a4d4]  to-[#b6fbff] w-full h-[100vh] flex justify-center items-center'}>
            <Login/>
        </div>
    )
}