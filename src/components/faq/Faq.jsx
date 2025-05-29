import React, { useState } from 'react';
import './Faq.css'; // Создадим этот файл для стилей

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "С какого возраста можно начинать обучение?",
      answer: "Мы принимаем детей от 6 лет. Для разных возрастных групп разработаны специальные программы."
    },
    {
      question: "Как проходят занятия?",
      answer: "Занятия проходят онлайн в небольших группах. Каждый урок включает теорию и практические задания."
    },
    {
      question: "Должен ли быть у ребенка опыт в программировании, чтобы проходить курсы?",
      answer: "Нет, опыт не обязателен. Мы обучаем с нуля."
    },
    {
      question: "Можно ли получить пробный урок?",
      answer: "Да, мы предлагаем бесплатный пробный урок, чтобы познакомиться с форматом обучения."
    }
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Часто задаваемые вопросы</h2>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
            key={index}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleItem(index)}
            >
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;