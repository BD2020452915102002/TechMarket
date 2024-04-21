import TextField from "@mui/material/TextField";
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className={' w-full h-[100vh] flex justify-center items-center'}>
            <div
                className="flex flex-col justify-center items-center w-[40vw] bg-white   shadow-[0px_0px_10px] shadow-gray-500 my-44">
                <div className={'uppercase font-bold text-3xl mt-8'}>TeckMarket</div>
                <div className="px-10 pb-5 rounded-md  flex flex-col justify-center items-center w-full  mt-10">
                    <h1 className="font-medium text-xl mb-6 mt-3">Tạo tài khoản</h1>
                    <TextField label="Họ và tên" className="w-full !my-4 "/>
                  <div className={'grid grid-cols-2 gap-3 w-full'}>
                      <TextField label="Email" className="w-full !my-4"/>
                      <TextField label="Số điện thoại" className="w-full !my-4"/>
                  </div>
                    <TextField label="Địa chỉ" className="w-full !my-4"/>
                    <div className={'grid grid-cols-2 gap-3 w-full'}>
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
                    </div>
                    <Button variant="contained" className={'!my-4'}>Tạo tài khoản</Button>
                </div>
            </div>
        </div>
    );
}
