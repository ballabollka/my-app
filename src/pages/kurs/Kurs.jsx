import React, { useState, useEffect } from 'react';
import './Kurs.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Kurs = () => {
  const [activeTab, setActiveTab] = useState('kids');
  const [courses, setCourses] = useState([]);

  // Берём API URL из переменной окружения
  const API_URL = process.env.REACT_APP_API_URL;

  // Инициализируем навигацию
  const navigate = useNavigate();

  useEffect(() => {
    // Используем переменную API_URL вместо хардкода
    axios.get(`${API_URL}/courses/api/courses/`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Ошибка при загрузке курсов:", error);
      });
  }, [API_URL]);

  const filteredCourses = courses.filter(course => course.age_group === activeTab);

  // Обработчик клика на кнопку "оставить заявку"
  const handleConsultationClick = () => {
    navigate('/freelesson');
  };

  return (
    <div className='section_kurs'>
      <div className='container_kurs'>
        <div className='section'>
          <h1>Курсы</h1>

          <div className='tabs'>
            <button 
              className={`tab-button ${activeTab === 'kids' ? 'active' : ''}`}
              onClick={() => setActiveTab('kids')}
            >
              Малышам
            </button>
            <button 
              className={`tab-button ${activeTab === 'school' ? 'active' : ''}`}
              onClick={() => setActiveTab('school')}
            >
              Школьникам
            </button>
          </div>

          <div className='kurs_grid'>
            {filteredCourses.map(course => (
              <div className='kurs' key={course.id}>
                <h2>{course.title}</h2>
                <p>{course.age}</p>
                <p>Длительность курса: {course.duration}</p>
                <p>Продолжительность урока: {course.lesson_time}</p>
                <p>{course.description}</p>
                <Link to={`/courses/${course.id}`} className="b_kurs">подробнее</Link>
                <Link to="/register" className="bb_kurs">записаться</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='kurs_polosa'>
        <h1>Не знаете что выбрать?</h1>
        <p>Оставьте заявку на бесплатную консультацию: мы поможем с выбором 🧠</p>
        <button className='bb_polosa' onClick={handleConsultationClick}>оставить заявку</button>
      </div>
    </div>
  );
};

export default Kurs;
