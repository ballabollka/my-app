import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <div>
      <div className='zagolovok'>
        <h1>Нам доверяют сотни учеников по всему миру потому что 	&#128071;</h1>
      </div>
          <div className='cards'>
          <div className='card'>
            <h1>Авторская игровая методика</h1>
            <p>Осваиваем технологии через увлекательные сюжеты: от космических миссий до работы в реальной IT-компании</p>
          </div>
          <div className='card'>
          <h1>Обучение через практику</h1>
          <p>С первого занятия создаём работающие проекты: анимацию в Scratch и мобильные приложения на Python</p>
          </div>
          <div className='card'>
            <h1>Универсальная платформа</h1>
            <p>Три в одном: интерактивный учебник, цифровая лаборатория и сообщество юных разработчиков</p>
          </div>
          <div className='card'>
          <h1>Компетенции нового поколения</h1>
          <p> Развиваем навыки, которые помогут в учёбе, карьере и реализации самых смелых планов</p>
          </div>
          <div className='card'>
          <h1>Сообщество будущих IT-профи</h1>
          <p> Создаём проекты вместе с единомышленниками: от групповых заданий в Алгоритмике до собственных стартапов</p>
          </div>

          <div className='card'>
          <h1>Поддержка на каждом этапе</h1>
          <p> Наставники и кураторы всегда готовы помочь с вопросами, проверкой заданий и мотивацией к обучению</p>
          </div>
        </div>
    </div>
  )
}

export default Contacts