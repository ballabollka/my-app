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

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        general: ''
    });

    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    // Валидация полей
    const validateField = (name, value) => {
        let error = '';
        
        switch (name) {
            case 'firstname':
            case 'lastname':
                if (!value.trim()) error = 'Обязательное поле';
                else if (!/^[а-яА-ЯёЁa-zA-Z- ]+$/.test(value)) error = 'Только буквы и дефисы';
                break;
            case 'phone':
                if (!value.trim()) error = 'Обязательное поле';
                else if (!/^[\d+][\d() -]{9,}$/.test(value)) error = 'Некорректный номер';
                break;
            case 'email':
                if (!value.trim()) error = 'Обязательное поле';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Некорректный email';
                break;
            case 'password':
                if (!value.trim()) error = 'Обязательное поле';
                else if (value.length < 8) error = 'Минимум 8 символов';
                break;
            default:
                break;
        }
        
        return error;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Валидация при изменении
        setErrors({
            ...errors,
            [name]: validateField(name, value),
            general: '' // Сбрасываем общую ошибку при изменении поля
        });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Проверяем все поля
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleInputSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setErrors(prev => ({
                ...prev,
                general: 'Пожалуйста, исправьте ошибки в форме'
            }));
            return;
        }

        try {
            const response = await fetch(`${API_URL}/register/`, {
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

            setErrors({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                password: '',
                general: ''
            });

            navigate('/pay');
        } catch (error) {
            setErrors(prev => ({
                ...prev,
                general: error.message
            }));
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

                    <div className="input-group">
                        <input
                            className={`form_input ${errors.firstname ? 'error' : ''}`}
                            type='text'
                            name='firstname'
                            placeholder='Имя'
                            value={formData.firstname}
                            onChange={handleInputChange}
                        />
                        {errors.firstname && <span className="error-message">{errors.firstname}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            className={`form_input ${errors.lastname ? 'error' : ''}`}
                            type='text'
                            name='lastname'
                            placeholder='Фамилия'
                            value={formData.lastname}
                            onChange={handleInputChange}
                        />
                        {errors.lastname && <span className="error-message">{errors.lastname}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            className={`form_input ${errors.phone ? 'error' : ''}`}
                            type='text'
                            name='phone'
                            placeholder='Телефон'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            className={`form_input ${errors.email ? 'error' : ''}`}
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            className={`form_input ${errors.password ? 'error' : ''}`}
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button className='form_button' type='submit'>
                        Зарегистрироваться
                    </button>

                    {errors.general && <p className='error general-error'>{errors.general}</p>}

                    <p className="info-note">
                        Оплата курса будет доступна после регистрации. 
                    </p>

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