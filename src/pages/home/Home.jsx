import React from 'react'
import './Home.css'
import top from './../../img/top.png'
import top2 from './../../img/top2.png'

import card from './../../img/card.png'
import card2 from './../../img/card2.png'
import card3 from './../../img/card3.png'
import polosa from './../../img/polosa.png'
import info_img from './../../img/info_img.png'
import { Link, useNavigate } from 'react-router-dom'  // <-- добавлен useNavigate

const Home = () => {
  const navigate = useNavigate();  // инициализируем навигацию

  const handleConsultationClick = () => {
    navigate('/freelesson');  // переход на нужную страницу
  };

  return (
   <section className='info'>
    <div className='container'>
        <div className='info_content'>
            <div className='zaglav'>
           <h1> Дорога <br></br>в <br></br>будущее</h1>
           <p className='p1'>  Школа программирования&#128526; </p>
           <p className='p2'>  Не откладывай. Начни обучение уже сегодня</p>
           <ul>
            <li><Link to="/kurs" className="bb_button">выбрать курс</Link></li>
           </ul>
           </div>
           
            <div className='info_img'>
                <img src={info_img} alt='info'></img>
            </div>
        </div>

        <div className='polosa'>
                <div className='container'>
                      <div className='polosaImg'>
                <img src={polosa} alt='polosa'></img>
            </div>
                </div>
            </div>

            <div className='section1'>
                <h1>Наши направления</h1>
                < div className='top_grid'>
                    <div className='top'>
                        <h2>Для самых маленьких</h2>
                        <img src={top} alt='top'></img>
                        <p>Этот курс познакомит детей с основами робототехники и программирования. Они научатся собирать роботов и писать программы для их управления. Процесс создания робота станет настоящим приключением, где каждый шаг — это решение реальной инженерной задачи.</p>
                        <Link to="/kurs" className="bb_top"> перейти к курсам</Link>
                    </div>

                    <div className='top'>
                        <h2>Для школьников-подростков</h2>
                        <img src={top2} alt='top2'></img>
                        <p>Дети научатся создавать собственные компьютерные игры и анимации с помощью Scratch и Python. Этот курс даст возможность не только узнать основы программирования, но и научиться работать с графикой и звуком, воплощая свои фантазии в интерактивные проекты.</p>
                        <Link to="/kurs" className='bb_top'> перейти к курсам</Link>  
                    </div>

                </div>
            </div>

            <div className='section2'>
                <h1>Изучай, играя &#128521; </h1>
                <p>Не всё, чему учат в школе, находит отклик в жизни. Мы хотим, чтобы наши ученики не просто запоминали теорию, а действительно умели использовать знания.<br></br> Поэтому мы создали собственную методику, которая помогает превращать обучение в результат.<br></br>Наши основные задачи &#128071; </p>
                < div className='card_grid'>

                    <div className='card'>
                        <h2>Захватить интерес с первых минут</h2>
                        <img src={card} alt='card'></img>
                        <p> Каждый курс построен как увлекательная история, где ребёнок становится героем и с увлечением осваивает новые знания.</p>
                    </div>

                    <div className='card'>
                        <h2>Вдохновить на действие</h2>
                        <img src={card2} alt='card2'></img>
                        <p>Ребёнок не просто учит теорию, а сразу применяет знания на деле: двигает персонажей, пишет код, создаёт свои миры.</p>
                    </div>

                    <div className='card'>
                        <h2>Не перегрузить и удержать интерес</h2>
                        <img src={card3} alt='card3'></img>
                        <p>Никакой скуки — в одном занятии есть всё: комиксы, игры, новости технологий и обсуждения.</p>
                    </div>

                </div>
            </div>

            <div className='polosa2'>
            <h1> Не знаете что выбрать?</h1>
            <p>Оставьте заявку на бесплатную консультацию: мы поможем с выбором	&#128161;</p>
            <button className='bb_polosa2' onClick={handleConsultationClick}>оставить заявку</button>
            </div>
            
    </div>

   </section>
  )
}

export default Home
