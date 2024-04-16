import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, content }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: 20, background: '#fff', borderRadius: 5, width: '300px', textAlign: 'center' }}>
                <p>{content}</p>
                <button onClick={onClose} style={{ marginTop: 10 }}>Close</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.string
};

export default Modal;
