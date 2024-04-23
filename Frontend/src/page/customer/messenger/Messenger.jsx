import React from "react";
import { styled } from "@mui/material";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

const Messenger = () => {
  return (
    <MainContainer>
      <MessengerContent />
    </MainContainer>
  );
};

export default Messenger;
