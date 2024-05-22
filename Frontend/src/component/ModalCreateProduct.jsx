import React from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalCreateProduct(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant={'contained'}>Thêm mới</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={'!border-0'}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thông tin sản phẩm muốn thêm mới
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>Tên</div>
                        <div>Bí danh</div>
                        <div>Hãng</div>
                        <div>Mô tả</div>
                        <div>Giá</div>
                        <div>Loại</div>
                        <div>Số lượng</div>
                        <div>Hình ảnh</div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCreateProduct;