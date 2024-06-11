import React from "react";
import { styled } from "@mui/system";
import CustomersTitle from "./CustomersTitle";
import CustomersList from "./CustomersList";

const MainContainer = styled("div")({
});

const CustomersSideBar = () => {
  return (
    <MainContainer className={'w-[18vw] flex flex-col p-8 bg-white'}>
      <CustomersTitle title="Private Messages"/>
      <CustomersList />
    </MainContainer>
  );
};

export default CustomersSideBar;
