import React from "react";
import ReactDom from "react-dom";


export default function Modal({ open, children, onClose, position, onClickOutSide }) {
  // if (!open) return null;
  const modalPosition = position === 'right' ? 'modal-right' : 'modal-center';

  return ReactDom.createPortal(
    <div className={`fn-modal ${open ? 'show' : ''}`} onClick={onClickOutSide}>
      <div className="overlay" />
      <div className={`modal-body ${modalPosition}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector('body'),
  );
}
