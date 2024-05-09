import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeIcon from '@mui/icons-material/Home';
import ManIcon from '@mui/icons-material/Man';
import { useDispatch, useSelector } from "react-redux";

function DetailUser(props) {
    const { userDetails } = JSON.parse(localStorage.getItem('session'))
    console.log('>>>>>', userDetails);

    const [infor, setInfor] = useState({
        name: "data",
        email: "nguyenxuanphuc@gmail.com",
        phone: "113",
        gender: "nam",
        address: "Bac Kan"
    });

    // const handleUpdate = () => {
    //     setInfor({
    //         name: 'new value',
    //         email: 'new email',
    //         phone: 'new phone',
    //         gender: 'new gender'
    //     });
    // }

    return (
        <div>
            <div className='border-b-2 my-5 pb-5'>
                <h1 className='font-bold'>Hồ sơ của tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className='flex flex-row'>
                <div className='w-[70%]'>
                    <div className={'flex flex-col gap-3'}>
                        <div className={'flex gap-3 items-center'}>
                            <div>
                                <PersonIcon />
                            </div>
                            <div>
                                <div className={'text-[#8F90A6]'}>Tên</div>
                                <div className={' text-[#1C1C28]'}>{userDetails.name}</div>
                            </div>
                        </div>

                        <div className={'flex gap-3 items-center'}>
                            <div>
                                <ManIcon />
                            </div>
                            <div>
                                <div className={'text-[#8F90A6]'}>Giới tính</div>
                                <div className={'text-[#1C1C28]'}>{infor.gender}</div>
                            </div>
                        </div>

                        <div className={'flex gap-3 items-center'}>
                            <div>
                                <EmailIcon />
                            </div>
                            <div>
                                <div className={'text-[#8F90A6]'}>Email</div>
                                <div className={'text-[#1C1C28]'}>{userDetails.email}</div>
                            </div>
                        </div>

                        <div className={'flex gap-3 items-center'}>
                            <div>
                                <HomeIcon />
                            </div>
                            <div>
                                <div className={'text-[#8F90A6]'}>Địa chỉ</div>
                                <div className={'text-[#1C1C28]'}>{infor.address}</div>
                            </div>
                        </div>

                        {/* <p className={`font-normal hover:text-[#1F3368] text-[#1F3368] underline hover:underline cursor-pointer ${isShow ? '' : '  hidden'}`}
                            onClick={showModal}>Cập nhật thông tin</p>
                        <Modal title="Cập nhật thông tin liên hệ"
                            open={open}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Huỷ
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                                    Lưu thông tin
                                </Button>,
                            ]}>
                            <ModalCustomerInfor userInfo={userInfor} />
                        </Modal> */}
                    </div>

                </div>
                <div className='border-l-2 p-10 flex flex-col items-center'>
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <button type="button" class="mt-4 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ">Chọn ảnh</button>
                    <p className='text-[#8F90A6]' >Dung lượng file tối đa 1 MB</p>
                    <p className='text-[#8F90A6]'>Định dạng: JPEG, .PNG</p>
                </div>
            </div>
            <button type="button" class="text-white rounded bg-red-700 hover:bg-red-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">Lưu</button>
        </div >
    );
}

export default DetailUser;
