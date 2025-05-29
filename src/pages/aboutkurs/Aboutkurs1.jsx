// src/pages/course-details/Aboutkurs1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aboutkurs.css';

const Aboutkurs1 = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/register'); // переходим на страницу регистрации
  };

  return (
    <div className="course-details">
      <h1>Основы логики и программирования</h1>
      <p><strong>Возраст:</strong> от 6 лет</p>
      <p><strong>Длительность курса:</strong> 6 месяцев</p>
      <p><strong>Продолжительность урока:</strong> 30 минут</p>
      <p>
        Погружение в мир алгоритмов и кода. На этом курсе дети изучат основы логического мышления и начнут работать с простыми алгоритмами.
      </p>

      <h2>Программа курса</h2>
      <ul className="lesson-list">
        <li>1. Введение в логическое мышление</li>
        <li>2. Что такое алгоритм?</li>
        <li>3. Последовательность действий</li>
        <li>4. Условные операторы</li>
        <li>5. Циклы</li>
        <li>6. Основы блок-схем</li>
        <li>7. Работа с визуальным языком программирования</li>
        <li>8. Итоговый проект</li>
      </ul>

      <h2>Стоимость</h2>
      <p className="price">₽ 5,990 / месяц</p>

      <button className="enroll-button" onClick={handleEnrollClick}>
        Записаться на курс
      </button>
    </div>
  );
};

export default Aboutkurs1;
