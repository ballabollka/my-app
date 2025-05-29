import React, { useState, useEffect } from 'react';
import './Kurs.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Kurs = () => {
  const [activeTab, setActiveTab] = useState('kids');
  const [courses, setCourses] = useState([]);

  // Загрузка данных с бэка
  useEffect(() => {
    axios.get('http://localhost:8000/courses/api/courses/')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Ошибка при загрузке курсов:", error);
      });
  }, []);

  const filteredCourses = courses.filter(course => course.age_group === activeTab);

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
                {course.image_url && <img src={course.image_url} alt='info' className='kurs-icon' />}
                <Link to="/aboutkurs1" className="b_kurs">подробнее</Link>
                <Link to="/register" className="bb_kurs">записаться</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='kurs_polosa'>
        <h1>Не знаете что выбрать?</h1>
        <p>Оставьте заявку на бесплатную консультацию: мы поможем с выбором 🧠</p>
        <button className='bb_polosa'>оставить заявку</button>
      </div>
    </div>
  );
};

export default Kurs;
