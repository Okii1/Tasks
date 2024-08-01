import React, { useState, useEffect } from 'react';
import './PopUp.css';

const Popup = ({ handleClose, saveColors, initialColors }) => {
  const [colors, setColors] = useState(initialColors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColors((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    saveColors(colors);
    handleClose();
  };

  useEffect(() => {
    const backdrop = document.querySelector('.popup-backdrop');
    const content = document.querySelector('.popup-content');
    backdrop.classList.add('show');
    content.classList.add('show');
  }, []);

  return (
    <div className="popup-backdrop" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Customize Theme Colors</h2>
        <form onSubmit={handleSave}>
          {Object.keys(colors).map((color) => (
            <div key={color} className="color-input">
              <label>{color.replace(/([A-Z])/g, ' $1')}</label>
              <div className="color-picker">
                <span>{colors[color]}</span>
                <input
                  type="color"
                  name={color}
                  value={colors[color]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
          <div className="popup-actions">
            <button type="button" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
