import React, { useState } from 'react'
import comp from './../../img/comp.png'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isKursPage = location.pathname === '/kurs'
  const isContactsPage = location.pathname === '/contacts'
  const isFreeLessonPage = location.pathname === '/freelesson'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <main>
      <header className='header'>
        <div className='container'>
          <div className='content'>
            <div className='header_logo'>
              <img src={comp} alt='ProgramSchool' />
              <span>ProgramSchool</span>
            </div>

            {/* Бургер меню для мобильных */}
            <div className='burger' onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Навигация */}
            <div className={`header_nav ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                {isKursPage || isContactsPage || isFreeLessonPage ? (
                  <li><Link to="/" onClick={() => setIsMenuOpen(false)}>ГЛАВНАЯ</Link></li>
                ) : (
                  <li><Link to="/kurs" onClick={() => setIsMenuOpen(false)}>КУРСЫ</Link></li>
                )}

                {isFreeLessonPage ? (
                  <li><Link to="/kurs" onClick={() => setIsMenuOpen(false)}>КУРСЫ</Link></li>
                ) : isContactsPage ? (
                  <li><Link to="/kurs" onClick={() => setIsMenuOpen(false)}>КУРСЫ</Link></li>
                ) : (
                  <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>О НАС</Link></li>
                )}

                {isFreeLessonPage && (
                  <li><Link to="/contacts" onClick={() => setIsMenuOpen(false)}>О НАС</Link></li>
                )}

                <li><Link to="/kabunet" onClick={() => setIsMenuOpen(false)}>ЛИЧНЫЙ КАБИНЕТ</Link></li>

                {!isFreeLessonPage && (
                  <li>
                    <Link to="/freelesson" className='zayavka' onClick={() => setIsMenuOpen(false)}>
                      ПРОБНЫЙ УРОК
                    </Link>
                  </li>
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
