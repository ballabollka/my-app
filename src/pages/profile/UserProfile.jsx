import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('http://localhost:8000/api/user/profile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка загрузки данных пользователя');
        setLoading(false);
      });
  }, [navigate]);

  if (loading) return <p className="user-profile-loading">Загрузка...</p>;
  if (error) return <p className="user-profile-error">{error}</p>;

  return (
    <>
      <h1 className="user-profile-title">Личный кабинет</h1>
      <div className="user-profile-container">
        <div className="user-profile-field">
          <span className="user-profile-label">Имя:</span>
          <span className="user-profile-value">{userData.first_name}</span>
        </div>
        <div className="user-profile-field">
          <span className="user-profile-label">Фамилия:</span>
          <span className="user-profile-value">{userData.last_name}</span>
        </div>
        <div className="user-profile-field">
          <span className="user-profile-label">Email:</span>
          <span className="user-profile-value">{userData.email}</span>
        </div>
        <div className="user-profile-field">
          <span className="user-profile-label">Телефон:</span>
          <span className="user-profile-value">{userData.phone || 'Не указан'}</span>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
