import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setMessage('Пожалуйста, введите свой email.');
      return;
    }

    try {
      const response = await fetch('https://my-project-1-i05n.onrender.com/api/newsletter/subscribe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Спасибо за подписку! Мы отправим вам новости на почту.');
        setEmail('');
      } else {
        setMessage(data.error || 'Ошибка при отправке подписки.');
      }
    } catch (error) {
      setMessage('Ошибка сети. Попробуйте позже.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_about">
          <h2>О нас</h2>
          <p>Мы — школа программирования, которая помогает детям развивать логическое мышление и обучаться технологиям будущего.</p>
        </div>

        <div className="footer_links">
          <h3>Полезные ссылки</h3>
          <ul>
            <li><a href="#courses">Курсы</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer_contacts">
          <h3>Контакты</h3>
          <p>Телефон: +1 (234) 567-890</p>
          <p>Email: contact@school.com</p>
        </div>
      </div>

      <div className="newsletter_box">
        <h3>Подпишитесь на нашу рассылку, чтобы получать свежие новости и спецпредложения</h3>
        <form onSubmit={handleSubmit} className="newsletter_form">
          <input
            type="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={handleEmailChange}
            className="newsletter_input"
          />
          <button type="submit" className="newsletter_button">Подписаться</button>
        </form>
        {message && <p className="newsletter_message">{message}</p>}
      </div>

      <div className="footer_bottom">
        <p>&copy; 2025 Школа Программирования. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
