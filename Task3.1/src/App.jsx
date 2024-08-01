import React, { useState, useEffect } from 'react';
import './App.css';
import Popup from './components/PopUp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState({
    fontColor: '#444444',
    backgroundColor: '#FFFFFF',
    buttonColor: '#2077EF',
    buttonBorderColor: '#2077EF',
    buttonsMouseoverColor: '#0053D1',
  });

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem('colors'));
    if (savedColors) {
      setColors(savedColors);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-color', colors.fontColor);
    document.documentElement.style.setProperty('--background-color', colors.backgroundColor);
    document.documentElement.style.setProperty('--button-color', colors.buttonColor);
    document.documentElement.style.setProperty('--button-border-color', colors.buttonBorderColor);
    document.documentElement.style.setProperty('--buttons-mouseover-color', colors.buttonsMouseoverColor);
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const saveColors = (newColors) => {
    setColors(newColors);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Customizer</h1>
        <button className="show-popup-button" onClick={togglePopup}>
          Customize Colors
        </button>
      </header>
      {isOpen && <Popup handleClose={togglePopup} saveColors={saveColors} initialColors={colors} />}
      <section className="color-display">
        <div className="color-box" style={{ backgroundColor: colors.fontColor }}>Font Color</div>
        <div className="color-box" style={{ backgroundColor: colors.backgroundColor }}>Background Color</div>
        <div className="color-box" style={{ backgroundColor: colors.buttonColor }}>Button Color</div>
        <div className="color-box" style={{ backgroundColor: colors.buttonBorderColor }}>Button Border Color</div>
        <div className="color-box" style={{ backgroundColor: colors.buttonsMouseoverColor }}>Button Hover Color</div>
      </section>
    </div>
  );
}

export default App;
