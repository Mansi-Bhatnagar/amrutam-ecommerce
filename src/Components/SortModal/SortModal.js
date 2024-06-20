import React, { useRef, useState, useEffect } from "react";

const SortModal = ({ isOpen, onClose, children }) => {
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleDragStart = (event) => {
    setIsDragging(true);
    setStartY(event.clientY);
  };

  const handleDragMove = (event) => {
    if (isDragging && event.clientY - startY > 100) {
      onClose();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={menuRef}
      className={`modal-menu ${isOpen ? "open" : ""}`}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {children}
    </div>
  );
};

export default SortModal;
