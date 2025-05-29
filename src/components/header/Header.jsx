import React from 'react'
import comp from './../../img/comp.png'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isKursPage = location.pathname === '/kurs'
  const isContactsPage = location.pathname === '/contacts'
  const isFreeLessonPage = location.pathname === '/freelesson'

  return (
    <main>
      <header className='header'>
        <div className='container'>
          <div className='content'>
            <div className='header_logo'>
              <img src={comp} alt='ProgramSchool'></img>
              <span>ProgramSchool</span>
            </div>
            <div className='header_nav'>
              <ul>
                {/* Первая ссылка - на главную или курсы */}
                {isKursPage || isContactsPage || isFreeLessonPage ? (
                  <li><Link to="/">ГЛАВНАЯ</Link></li>
                ) : (
                  <li><Link to="/kurs">КУРСЫ</Link></li>
                )}

                {/* Вторая ссылка - курсы или о нас */}
                {isFreeLessonPage ? (
                  <li><Link to="/kurs">КУРСЫ</Link></li>
                ) : isContactsPage ? (
                  <li><Link to="/kurs">КУРСЫ</Link></li>
                ) : (
                  <li><Link to="/contacts">О НАС</Link></li>
                )}

                {/* Третья ссылка - о нас (только на странице пробного урока) */}
                {isFreeLessonPage && (
                  <li><Link to="/contacts">О НАС</Link></li>
                )}

                {/* Всегда показываем личный кабинет */}
                <li><Link to="/kabunet">ЛИЧНЫЙ КАБИНЕТ</Link></li>

                {/* Кнопка пробного урока (не показываем на странице freelesson) */}
                {!isFreeLessonPage && (
                  <li><Link to="/freelesson" className='zayavka'>ПРОБНЫЙ УРОК</Link></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}

export default Header