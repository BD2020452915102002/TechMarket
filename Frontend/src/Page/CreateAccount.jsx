import TextField from "@mui/material/TextField";
import {Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
            <div className="flex flex-col justify-center items-center w-[36vw] bg-white  rounded-2xl shadow-[0px_0px_10px] shadow-cyan-600">
                <img src="/src/assets/techlogo2.png" alt="" className="w-20 h-20 mt-6"/>
                <div className="px-10 pb-5 rounded-md  flex flex-col justify-center items-center w-full ">
                    <h1 className="font-medium text-2xl mb-6 mt-3">Tạo tài khoản</h1>
                    <TextField  label="Họ và tên" className="w-full !my-4 "/>
                    <TextField label="Email" className="w-full !my-4"/>
                    <TextField label="Số điện thoại" className="w-full !my-4"/>
                    <TextField label="Địa chỉ" className="w-full !my-4"/>
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
                    <FormControl variant="outlined" className={'w-full !my-4'}>
                        <InputLabel htmlFor="outlined-adornment-password">Nhập lại mật khẩu</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
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
                            label="Nhập lại mật khẩu"
                        />
                    </FormControl>
                    <Button variant="contained" className={'!my-4'}>Tạo tài khoản</Button>
                </div>
            </div>
    );
}
