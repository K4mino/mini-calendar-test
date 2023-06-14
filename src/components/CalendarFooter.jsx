import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;
  background-color: #f6f6f6;
  border-top: 1px solid #ebebeb;
  padding: 20px 30px;
  position: relative;
  bottom: 60px;
  z-index: 2;
`;

const FooterTitle = styled.h1`
  color: #ff3333;
  font-size: 22px;
  font-weight: 500;
`;

const CalendarFooter = ({ shouldDelete,setShouldDelete }) => {
  return (
    <Wrapper>
      <FooterTitle>Today</FooterTitle>
      {shouldDelete && <FooterTitle onClick={() => setShouldDelete(false)}>Delete</FooterTitle>}
    </Wrapper>
  );
};

export default CalendarFooter;
