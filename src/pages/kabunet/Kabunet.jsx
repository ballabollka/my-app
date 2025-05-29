import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Kabunet.css';

const Kabunet = () => {
    const [formData, setFormData] = useState({
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
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Неверный логин или пароль');
            }

            const data = await response.json();
            // Сохраняем токен в localStorage
            localStorage.setItem('token', data.access);

            // Перенаправляем на главную страницу после успешного входа
            navigate('/profile');
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className='kabunet'>
            <div className='welcome'>
                <h1>Добро пожаловать!</h1>
                <button
                    className="back-to-main"
                    onClick={() => navigate('/')}
                >
                    ← Вернуться на главную
                </button>
            </div>

            <div className='container'>
                <form className='form' onSubmit={handleInputSubmit}>
                    <h1>Вход</h1>

                    <div>
                        <input
                            className='form_input'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <input
                            className='form_input'
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button className='form_button' type='submit'>Войти</button>
                    {errors && <p className='error'>{errors}</p>}
                    <div className='text'>
                        <p>Нет аккаунта?</p>
                    </div>
                    <button className='button_k' onClick={() => navigate('/register')}>
                        зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Kabunet;

