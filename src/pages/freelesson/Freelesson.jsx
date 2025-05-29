import React, { useState } from 'react';
import './Freelesson.css' 

const Freelesson = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Форма отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в течение 15 минут.');
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="free-lesson-form-container">
      <div className="free-lesson-form">
        <h2>Запишитесь на бесплатный урок</h2>
        <p>Оставьте заявку и наши менеджеры свяжутся с вами в течение 15 минут</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ваш телефон"
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Записаться
          </button>
        </form>
      </div>
    </div>

  );
};

export default Freelesson;