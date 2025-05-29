import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже показано окно (используем localStorage)
    const wasShown = localStorage.getItem('popupShown');
    
    if (!wasShown) {
      // Показываем окно через 1 секунду после загрузки страницы
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('popupShown', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>×</button>
        <h2>Попробуйте первый урок бесплатно!</h2>
        <p>Оставьте заявку и получите консультацию и бесплатный пробный урок по любому направлению на выбор</p>
        <form className="popup-form">
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Ваш телефон" required />
          <button type="submit">Записаться на урок</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;