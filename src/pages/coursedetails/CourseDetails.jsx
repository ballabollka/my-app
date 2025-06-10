import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Aboutkurs.css';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;  // например 'http://127.0.0.1:8000'

  useEffect(() => {
    axios.get(`${API_URL}/courses/api/courses/${id}/`)  // Важно: слеш в конце!
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных курса:', error);
      });
  }, [API_URL, id]);

  const handleEnrollClick = () => {
    navigate('/register');
  };

  if (!course) return <div>Загрузка...</div>;

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p><strong>Возраст:</strong> {course.age}</p>
      <p><strong>Длительность курса:</strong> {course.duration}</p>
      <p><strong>Продолжительность урока:</strong> {course.lesson_time}</p>
      <p>{course.description}</p>

      <h2>Программа курса</h2>
      <ul className="lesson-list">
        {course.program && course.program.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ul>

      <h2>Стоимость</h2>
      <p className="price">₽ {course.price} / месяц</p>

      <button className="enroll-button" onClick={handleEnrollClick}>
        Записаться на курс
      </button>
    </div>
  );
};

export default CourseDetails;
