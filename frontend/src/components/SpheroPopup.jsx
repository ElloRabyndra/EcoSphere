import React, { useState, useEffect } from "react";

const SpheroPopup = ({
  level = "",
  point = "",
  badgeName = "",
  popupType = "level",
  isOpen = false,
  onClose = null,
  duration = 1500,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);

      // Auto close setelah duration
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          if (onClose) onClose();
        }, 300);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, duration, onClose]);

  const getImagePath = () => {
    if (popupType === "level") {
      return `/Popup/Level/level_${level}.png`;
    } else if (popupType === "point") {
      return `/Popup/Poin/poin_${point}.png`;
    } else if (popupType === "badge") {
      return `/Popup/Badge/${badgeName.replaceAll(" ", "").toLowerCase()}.png`;
    }
    return "";
  };

  const handleClick = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(() => onClose(), 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`sphero-popup-overlay ${isVisible ? "visible" : ""}`}
    >
      <div className="sphero-popup-backdrop" />

      <div
        className={`sphero-popup-content ${isVisible ? "visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getImagePath()}
          alt={`${popupType} popup`}
          className="sphero-popup-image"
        />
      </div>
    </div>
  );
};

export default SpheroPopup;
