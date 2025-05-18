import React from 'react';
import './Modal.css'; // Import CSS for modal styling

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Render nothing if the modal is not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                {children}
                <button onClick={onClose} className="close-modal-btn">Close</button>
            </div>
        </div>
    );
};

export default Modal;
