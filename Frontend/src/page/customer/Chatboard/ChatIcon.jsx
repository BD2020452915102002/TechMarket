import React, {useState} from 'react';
import {Backdrop, Badge, Box, Button, Fade, FormControlLabel, Modal, Switch, Typography} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RemoveIcon from '@mui/icons-material/Remove';
import SendIcon from '@mui/icons-material/Send';
import CommentList from "./CommentList.jsx";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
   outlined:"none",
    boxShadow: 24,
    p: 4,
};
function ChatIcon(props) {
    const [open, setOpen] = useState(false);
    const [start, setStart] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [invisible, setInvisible] =useState(false);

    return (
        <div className={'rounded-full fixed  right-[2vw] top-[85vh] z-50'}>
            <div onClick={handleOpen} className={"hover:scale-105 !rounded-full shadow-xl"}>
                <div className={'w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center'}>
                    <div>
                        <Badge color="error" variant="dot" invisible={invisible} >
                            <ChatBubbleIcon className={" text-white"}/>
                        </Badge>

                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className={'absolute w-[360px] h-[400px]  bottom-0 right-0 bg-white p-4 outline-0 -translate-y-[20px] -translate-x-[20px] '}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                           <div className={'flex justify-between'} onClick={()=>setOpen(false)}>
                               <p>Trò chuyện với shop</p>
                               <div className={'px-2 hover:bg-gray-200'}><RemoveIcon /></div>
                           </div>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2, height: "70%" }}>
                            {  !start?
                                <div className={'flex justify-center items-center !h-full'}>
                                    <Button variant={'contained'} onClick={()=>setStart(true)}>Bắt đầu nào</Button>
                                </div>:
                                <div className={'h-full'}>
                                    <CommentList/>
                                </div>
                            }
                        </Typography>
                        <div className={'fixed  bottom-2 flex items-center w-[calc(100%-36px)]'}>
                            <input type="text" className={'  outline-1 outline-blue-500 border-[1px] border-blue-500 p-2 w-full'}/>
                            <SendIcon className={'text-blue-500 ml-[-20px] absolute right-1' }/>

                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ChatIcon;