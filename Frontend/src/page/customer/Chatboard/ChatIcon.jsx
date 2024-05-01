import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Badge,
  Box,
  Button,
  Fade,
  FormControlLabel,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import CommentList from "./CommentList.jsx";
import { connect } from "react-redux";
import { chatTypes, getActions } from "../../../store/actions/chatActions.js";
import NewMessageInput from "../Chatboard/Messenger/NewMessageInput.jsx";
import Messages from "./Messenger/Messages/Messages.jsx";
import { getDirectChatHistory } from "../../../realtimeCommunication/socketConnection.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outlined: "none",
  boxShadow: 24,
  p: 4,
};

function ChatIcon({ chosenChatDetails, setChosenChatDetails, customers }) {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setChosenChatDetails(
      { id: customers[0].id, name: customers[0].name },
      chatTypes.DIRECT
    );
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setChosenChatDetails(
      { id: customers[0].id, name: customers[0].name },
      chatTypes.DIRECT
    );
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  };

  const handleClose = () => setOpen(false);
  const [invisible, setInvisible] = useState(false);

  return (
    <div className={"rounded-full fixed  right-[2vw] top-[85vh] z-50"}>
      <div
        onClick={handleOpen}
        className={"hover:scale-105 !rounded-full shadow-xl"}
      >
        <div
          className={
            "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
          }
        >
          <div>
            <Badge color="error" variant="dot" invisible={invisible}>
              <ChatBubbleIcon className={" text-white"} />
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
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            className={
              "absolute w-[360px] h-[400px] bg-slate-500  bottom-0 right-0 p-4 outline-0 -translate-y-[20px] -translate-x-[20px] "
            }
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div
                className={"flex justify-between"}
                onClick={() => setOpen(false)}
              >
                <p>Trò chuyện với shop</p>
                <div className={"px-2 hover:bg-gray-200"}>
                  <RemoveIcon />
                </div>
              </div>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, height: "70%" }}
            >
              {!start ? (
                <div className={"flex justify-center items-center !h-full"}>
                  <Button variant={"contained"} onClick={() => setStart(true)}>
                    Bắt đầu nào
                  </Button>
                </div>
              ) : (
                <div className={"h-full"}>
                  <Messages />
                </div>
              )}
            </Typography>
            <div
              className={
                "fixed  bottom-2 flex items-center w-[calc(100%-36px)]"
              }
            >
              <NewMessageInput />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStoreStateToProps = ({ customers, chat }) => {
  return {
    ...customers,
    ...chat,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(ChatIcon);
