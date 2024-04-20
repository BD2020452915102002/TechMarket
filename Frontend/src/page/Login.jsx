import TextField from "@mui/material/TextField";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {useAuth} from "../utils/AuthContext.jsx";
import {redirect, useNavigate} from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const account = [
        {
            Email: 'customer@gmail.com',
            Password: '123456',
            Role: 'customer'
        },
        {
            Email: 'emloyee@gmail.com',
            Password: '123456',
            Role: 'emloyee'
        },
        {
            Email: 'mannage@gmail.com',
            Password: '123456',
            Role: 'mannage'
        },
        {
            Email: 'admin@gmail.com',
            Password: '123456',
            Role: 'admin'
        },

    ]
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };


    const checkCredentials = (email, password) => {

        const matchedAccount = account.find(
            acc => acc.Email === email && acc.Password === password
        );

        return matchedAccount ? matchedAccount.Role : false;
    };

    function loginHandling() {
        if (checkCredentials(email, password)) {
            login(email)
            switch (checkCredentials(email, password)) {
                case 'customer':
                    navigate('/')
                    break
                case 'emloyee':
                    console.log('emloyee')
                    break
                case 'mannage':
                    console.log('mannage')
                    break
                case 'admin':
                    console.log('admin')
                    break
            }
        } else console.log('login faile')

    }

    return (
        <div className={' w-full h-[100vh] flex justify-center items-center'}>
            <div
                className="flex flex-col justify-center items-center w-[36vw] bg-white rounded-2xl shadow-[0px_0px_10px] shadow-gray-500 ">
                <div className={'uppercase font-bold text-3xl mt-8'}>TeckMarket</div>
                <div
                    className="px-10 pb-5 rounded-md  flex flex-col justify-center items-center w-full mt-10 ">
                    <h1 className="font-medium text-xl mb-6 mt-3">Đăng nhập</h1>
                    <TextField label="Email" className="w-full !my-4" value={email}
                               onChange={handleEmailChange}/>
                    <FormControl variant="outlined" className={'w-full !my-4'}>
                        <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                        <OutlinedInput
                            value={password}
                            onChange={handlePasswordChange}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Mật khẩu"
                        />
                    </FormControl>
                    <Button variant="contained" className={'!my-4'} onClick={loginHandling}>Đăng nhập</Button>
                    <div className={'flex items-center justify-between w-full mb-6 hover:cursor-pointer'}>
                        <div className={'underline text-md font-medium hover:text-blue-600'}>Đăng ký tài khoản</div>
                        <div className={'underline text-md font-medium  hover:text-blue-600'}>Quên mật khẩu</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
