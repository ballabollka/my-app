import React, { useState } from 'react';
import './Pay.css';

const courses = [
  { name: 'Основы логики и программирования', price: 5990 },
  { name: 'Разработка игр', price: 7500 },
  { name: 'Графический дизайн', price: 6800 },
  { name: 'Компьютерная грамотность', price: 4000 },
  { name: 'Python', price: 8000 },
  { name: 'Разработка веб-сайтов', price: 7200 },
  { name: 'Веб-дизайн', price: 6500 },
  { name: 'Blender', price: 7000 },
];

const Pay = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].name);
  const [formData, setFormData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvc: '',
  });

  const coursePrice = courses.find(course => course.name === selectedCourse)?.price || 0;

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за оплату курса "${selectedCourse}" на сумму ₽${coursePrice}! Наш администратор свяжется с вами в течение 10 минут.`);
    setFormData({
      cardNumber: '',
      nameOnCard: '',
      expiry: '',
      cvc: '',
    });
  };

  return (
    <div className="pay-container">
      <h1 className="pay-title">Оплата курса</h1>

      <div className="course-selection">
        <label htmlFor="course-select" className="label">Выберите курс</label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="course-select"
        >
          {courses.map(course => (
            <option key={course.name} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
        <p className="payment-info">
          Стоимость курса <strong>"{selectedCourse}"</strong> составляет <strong>₽{coursePrice}</strong>.
        </p>
      </div>

      <form className="pay-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="cardNumber">Номер карты</label>
          <input
            id="cardNumber"
            type="text"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            pattern="\d{4} \d{4} \d{4} \d{4}"
            title="Введите номер карты в формате: 0000 0000 0000 0000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nameOnCard">Имя на карте</label>
          <input
            id="nameOnCard"
            type="text"
            name="nameOnCard"
            placeholder="ИМЯ ФАМИЛИЯ"
            value={formData.nameOnCard}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="expiry">Срок действия</label>
            <input
              id="expiry"
              type="text"
              name="expiry"
              placeholder="MM/YY"
              maxLength="5"
              value={formData.expiry}
              onChange={handleChange}
              required
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              title="Введите срок действия в формате MM/YY"
            />
          </div>

          <div className="form-group half-width">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              name="cvc"
              placeholder="123"
              maxLength="4"
              value={formData.cvc}
              onChange={handleChange}
              required
              pattern="\d{3,4}"
              title="Введите CVC код (3 или 4 цифры)"
            />
          </div>
        </div>

        <button type="submit" className="pay-button">Оплатить</button>
      </form>
    </div>
  );
};

export default Pay;
