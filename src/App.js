import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import CalendarBody from "./components/CalendarBody";
import CalendarFooter from "./components/CalendarFooter";
import CalendarHeader from "./components/CalendarHeader";

const Wrapper = styled.div`
  position: relative;
`;

const Calendar = styled.div`
  max-width: 740px;
  margin: 0 auto;
  position: relative;
`;

const Modal = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 14px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  justify-content: space-between;
`;

const ModalTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const ModalSubtitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  width: 100%;
`;

const ModalButton = styled.div`
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  color: blue;
  font-weight: 600;
  width: 50%;
  padding: 10px 0;
  &:first-child {
    border-right: 1px solid #000;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Calendar>
        <CalendarHeader setShowModal={setShowModal} />
        <CalendarBody
          setShouldDelete={setShouldDelete}
          shouldDelete={shouldDelete}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />
        <CalendarFooter 
          shouldDelete={shouldDelete} 
          setShouldDelete={setShouldDelete}
        />
      </Calendar>
      {showModal && (
        <Modal>
          <ModalBody>
            <ModalTitle>http://calendar.cm</ModalTitle>
            <ModalSubtitle>Enter date</ModalSubtitle>
            <ModalSubtitle>YYYY-MM-DD HH:mm:ss</ModalSubtitle>
            <input />
            <ModalButtonsWrapper>
              <ModalButton onClick={handleCloseModal}>Cancel</ModalButton>
              <ModalButton onClick={handleCloseModal}>OK</ModalButton>
            </ModalButtonsWrapper>
          </ModalBody>
        </Modal>
      )}
    </Wrapper>
  );
}

export default App;
