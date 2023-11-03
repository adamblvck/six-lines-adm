// App.js
import React, { useState } from 'react';
import admData from './admData';
import InfoModal from './InfoModal';
import styled from 'styled-components';
import './App.css'; // Make sure to create this CSS file to style your app

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(30,34,41);
  background: linear-gradient(0deg, rgba(30,34,41,1) 0%, rgba(26,36,55,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-top: 20px;
  color: white; /* Or any other color that fits with the gradient */
`;

const SphereContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLine, setSelectedLine] = useState(null);

  const openModal = (lineKey) => {
    setSelectedLine(admData[lineKey]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLine(null);
  };

  const calculatePosition = (index, total, radius) => {
    const theta = ((Math.PI / 3) * index) - (Math.PI / 2); // Start from top and move clockwise
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    return { left: `${250 + x}px`, top: `${250 + y}px` };
  };

  const radius = 200; // radius of the circle in pixels

  return (
    <AppWrapper>
      <Title>6-Line Achitecture Development Method</Title>
      <SphereContainer>
        <div className="hexagram" >
          {Object.keys(admData).map((lineKey, index) => (
            <div
              key={lineKey}
              className="sphere"
              style={calculatePosition(index, Object.keys(admData).length, radius)}
              onClick={() => openModal(lineKey)}
            >
              <div className="line">{admData[lineKey].line}</div>
              <div className="title">{admData[lineKey].title}</div>
            </div>
          ))}
        </div>
      </SphereContainer>

      <InfoModal
        isOpen={modalOpen}
        onClose={closeModal}
        lineData={selectedLine}
      />

    </AppWrapper>
  );
};

export default App;
