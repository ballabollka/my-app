// src/pages/register/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Ошибка регистрации');
            }

            alert('Спасибо за регистрацию! Наш администратор свяжется с вами в течение 15 минут.');

            setFormData({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                password: '',
            });

            setErrors(null);

            navigate('/pay');
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className='kabunet'>
            <div className="welcome-container">
                <button 
                    className="back-to-main" 
                    onClick={() => navigate('/')}
                >
                    ← Вернуться на главную
                </button>
            </div>

            <div className='container'>
                <form className='form' onSubmit={handleInputSubmit}>
                    <h1>Регистрация</h1>

                    <input
                        className='form_input'
                        type='text'
                        name='firstname'
                        placeholder='Имя'
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        className='form_input'
                        type='text'
                        name='lastname'
                        placeholder='Фамилия'
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        className='form_input'
                        type='text'
                        name='phone'
                        placeholder='Телефон'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        className='form_input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        className='form_input'
                        type='password'
                        name='password'
                        placeholder='Пароль'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />

                    <button className='form_button' type='submit'>
                        Зарегистрироваться
                    </button>

                    {/* 💬 Сноска о платеже */}
                    <p className="info-note">
                        Оплата курса будет доступна после регистрации. 
                    </p>

                    {errors && <p className='error'>{errors}</p>}

                    <div className='text'>
                        <p>Уже есть аккаунт?</p>
                    </div>

                    <button 
                        className='button' 
                        type='button' 
                        onClick={() => navigate('/kabunet')}
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
