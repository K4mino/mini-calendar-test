import React, { useState } from 'react'
import styled from 'styled-components';
import { BsPlusLg,BsChevronLeft } from "react-icons/bs";
import { week } from './assets/weekdata';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    z-index:2;
    position:relative;
`;

const Header = styled.div`
    padding:10px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px solid #ebebeb;
`;

const HeaderTitle = styled.h1`
    font-size:24px;
    font-weight:500;
`;

const StyledPlusIcon = styled(BsPlusLg)`
    color:#ff3333;
    font-size:32px;
    font-weight:bold;
    cursor:pointer;
`;

const Dates = styled.div`
    padding:5px 15px;
    background-color:#f6f6f6;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-bottom: 1px solid #ebebeb;
`;

const DaysWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:60%;

    @media (max-width:565px){
        & {
            width:80%;
        }
    }
`

const Day = styled.div`
    width:24px;
    display:flex;
    flex-direction:column;
`;

const WeekDay = styled.h2`
    font-size:14px;
    text-align:center;
`;

const DayNumber = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:3px;
    margin:0;

    & h1{
        margin:0;
        font-size:16px;
        font-weight:500;
        text-align:center;
    }

    ${({isActive}) => isActive && 'background-color:#ff3333;color:#fff;border-radius:100%;'}
`;

const MonthWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:60%;

    @media (max-width:565px){
        & {
            width:80%;
        }
    }
`;

const Month = styled.h1`
    font-size:14px;
`;

const StyledArrowIcon = styled(BsChevronLeft)`
    color:#ff3333;
    cursor:pointer;
    font-size:20px;
    ${({isRight}) => isRight && 'transform:rotateY(180deg);'}
`;

const CalendarHeader = ({setShowModal}) => {
    const [activeDay, setActiveDay] = useState(4)

    const handleChangeDay = (i) => {
        setActiveDay(i)
    }

  return (
    <Wrapper>
        <Header>
            <HeaderTitle>Interview Calendar</HeaderTitle>
            <StyledPlusIcon onClick={() => setShowModal(true)}/>
        </Header>
        <Dates>
            <DaysWrapper>
                {
                    week.map((week,i) => (
                        <Day key={week.id}>
                            <WeekDay>
                                {week.weekDay}
                            </WeekDay>
                            <DayNumber isActive={i === activeDay} onClick={() => handleChangeDay(i)}>
                                <h1>
                                {week.number}
                                </h1>
                            </DayNumber>
                        </Day>
                    ))
                }
            </DaysWrapper>
            <MonthWrapper>
                <StyledArrowIcon/>
                <Month>March 2019</Month>
                <StyledArrowIcon isRight={true}/>
            </MonthWrapper>
        </Dates>
    </Wrapper>
  )
}

export default CalendarHeader