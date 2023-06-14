import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    gap:10px;
    padding-left:10px;
    padding-right:20px;
`;

const TimeWrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px 0;
    gap:40px;
`;

const Time = styled.div`
    color:#c6c6c6;
    font-size:16px;
`;

const CellsWrapper = styled.div`
    z-index:1;
    position:relative;
    top:-30px;
    display:grid;
    grid-template-columns: repeat(7, 1fr);
`;

const CalendarCell = styled.div`
    width:96px;
    height:60px;
    border:1px solid #e6e6e6;

    ${({isSelected}) => isSelected && 'background-color:#b3b7ff !important;'}

    &:nth-child(1n) {
        border-left: none;
      }

    &:nth-child(22),&:nth-child(23),&:nth-child(24),&:nth-child(25),&:nth-child(26),&:nth-child(27),&:nth-child(28){
        background-color:#ebecff;
    }
    
    &:nth-child(7n) {
        border-right: none;
    }

    @media (max-width:740px){
        & {
            width:clamp(1.25rem, 13.333vw - 0.167rem, 6rem);
        }
    }
`;

const CalendarBody = ({shouldDelete,setShouldDelete,selectedCell,setSelectedCell}) => {
    const timeList = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']

    const handleSelectToDelete = (i) => {
        setSelectedCell(i)
        setShouldDelete(true)
    }

  return (
    <Wrapper>
        <TimeWrapper>
            {
                timeList.map((time) => (
                    <Time key={time}>{time}</Time>
                ))
            }
        </TimeWrapper>
        <CellsWrapper>
            {
                [...new Array(91)].map((_,i) => (
                    <CalendarCell key={i} onClick={() => handleSelectToDelete(i)} isSelected={shouldDelete && i === selectedCell}/>
                ))
            }
        </CellsWrapper>
    </Wrapper>
  )
}

export default CalendarBody