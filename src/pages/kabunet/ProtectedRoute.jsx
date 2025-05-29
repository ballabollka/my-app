import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />; // Перенаправляем на страницу логина, если нет токена
    }

    return children; // Если токен есть, отображаем защищенный компонент
};

export default ProtectedRoute;
