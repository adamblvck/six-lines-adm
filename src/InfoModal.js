// InfoModal.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { createGlobalStyle } from 'styled-components';

// Style for the fonts
const ModalWrapper = styled.div`
  font-family: 'Nunito', sans-serif;
`;

const ModalContent = styled.div`
  font-family: 'Lato', sans-serif;
`;

const InfoModal = ({ isOpen, onClose, lineData }) => {
  if (!isOpen || !lineData) return null;

  return (
    <ModalWrapper className="modal" onClick={onClose}>
      <ModalContent className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
		  <h4 className="modal-line">{lineData.line}</h4>
          <h1 className="modal-title">{lineData.title}</h1>
		  <h4 className="modal-title">{lineData.title_details}</h4>
        </div>
        <div className="modal-body">
          <ReactMarkdown>{lineData.content_markdown}</ReactMarkdown>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Close</button>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default InfoModal;
