import TextField from "@mui/material/TextField";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";


function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="flex flex-col justify-center items-center w-[36vw] bg-white rounded-2xl shadow-[0px_0px_10px] shadow-cyan-600 ">
            <img src="/src/assets/techlogo2.png" alt="" className="w-20 h-20 mt-6"/>
            <div
                className="px-10 pb-5 rounded-md  flex flex-col justify-center items-center w-full " >
                <h1 className="font-medium text-2xl mb-6 mt-3">Đăng nhập</h1>
                <TextField label="Email" className="w-full !my-4"/>
                <FormControl variant="outlined" className={'w-full !my-4'}>
                    <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                    <OutlinedInput

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
                <Button variant="contained" className={'!my-4'}>Đăng nhập</Button>
                <div className={'flex items-center justify-between w-full mb-6 hover:cursor-pointer'}>
                    <div className={'underline text-md font-medium hover:text-blue-600'}>Đăng ký tài khoản</div>
                    <div className={'underline text-md font-medium  hover:text-blue-600'}>Quên mật khẩu</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
