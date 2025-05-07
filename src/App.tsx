import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';           // Логотип TokenMeter
import heroBg from './assets/hero_bg.png';        // Фоновое изображение для Hero-блока
import infographic from './assets/logo_no_background.png';// Placeholder для инфографики
import icon_1 from './assets/icon_coin_1.png';
import icon_2 from './assets/icon_coin_2.png';
import icon_3 from './assets/icon_coin_3.png';
import icon_4 from './assets/icon_coin_4.png';

const App: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen((prev) => !prev);

    return (
        <div className="app-wrapper">
            {/* Хэдер */}
            <header className="header">
                <div className="header-inner">
                    <div className="logo-container">
                        <img src={logo} alt="TokenMeter Logo" className="logo"/>
                        <span className="project-name">TokenMeter</span>
                    </div>
                    <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`} >
                        <a href="#hero">Главная</a>
                        <a href="#about">О проекте</a>
                        <a href="#contacts">Контакты</a>
                    </nav>
                    <div className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <section
                className="hero"
                id="hero"
                style={{backgroundImage: `url(${heroBg})`}}  // ваш фон Hero
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="fade-in" data-speed="0.3">Инвестируйте в цифровые квадратные метры</h1>
                    <a
                        className="cta-button fade-in delay"
                        data-speed="0.3"
                        href="https://t.me/your_telegram_handle"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Открыть TokenMeter в Телеграм
                    </a>

                    {/* Новый блок с карточками под кнопкой */}
                    <div className="hero-cards fade-in" data-speed="0.3">
                        <div className="hero-card">
                            <div className="hero-card-icon">
                                {/* Подставьте свою иконку (svg или <img>) */}
                                <img src={icon_1} alt="Иконка 1"/>
                            </div>
                            <div className="hero-card-text-block">
                                <h3 className="hero-card-title">Высокая доходность</h3>
                                <p className="hero-card-text">Рост цены свыше 35%*</p>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-icon">
                                <img src={icon_4} alt="Иконка 2"/>
                            </div>
                            <div className="hero-card-text-block">
                                <h3 className="hero-card-title">Низкий порог входа</h3>
                                <p className="hero-card-text">Купите токен на любую сумму</p>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-icon">
                                <img src={icon_3} alt="Иконка 3"/>
                            </div>
                            <div className="hero-card-text-block">
                                <h3 className="hero-card-title">Недвижимость по всему миру</h3>
                                <p className="hero-card-text">
                                    Покупайте и продавайте цифровые квадратные метры по всему миру
                                </p>
                            </div>
                        </div>

                        <div className="hero-card">
                            <div className="hero-card-icon">
                                <img src={icon_2} alt="Иконка 4"/>
                            </div>
                            <div className="hero-card-text-block">
                                <h3 className="hero-card-title">Доступность покупки</h3>
                                <p className="hero-card-text">
                                    Не нужно иметь гражданство страны, чтобы инвестировать в ее недвижимость
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Блок "О проекте" */}
            <section className="about" id="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Что такое цифровой квадратный метр?</h2>
                        <p>
                            Это цифровой финансовый актив или токен, цена которого твердо привязана к стоимости реального
                            квадратного метра недвижимости в ведущих городах мира. Стоимость токена меняется вместе с
                            ценой квадратного метра на каждом этапе строительства проекта.
                        </p>
                    </div>
                    <div className="about-visual">
                        <img src={infographic} alt="Инфографика"/>
                    </div>
                </div>
            </section>
            {/* Блок "Как это работает" */}
            <section className="how-it-works" id="how">
                <h2>Как это работает?</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-icon">
                            {/* Пример SVG-иконки, замените на свои иконки при необходимости */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            </svg>
                        </div>
                        <p>Приобретайте цифровые метры через Телеграм-бот.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            </svg>
                        </div>
                        <p>Стоимость токенов привязана к реальной недвижимости.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            </svg>
                        </div>
                        <p>Получайте прибыль при росте стоимости квадратных метров.</p>
                    </div>
                </div>
            </section>
            {/* Остальные блоки, например, FAQ, контакты и футер – можно добавить по аналогичной схеме */}
            <footer className="footer" id="contacts">
                <div className="footer-content">
                    <div className="footer-copy">© 2025 TokenMeter</div>
                    <div className="footer-social">
                        <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                            {/* Telegram icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 3L3 10.5l5.5 2.5L17 6l4 3z"></path>
                                <path d="M13 16l3 3 4-7-9-4.5z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
                            {/* Twitter icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-3.76 2.87-6.37 4.17A4.48 4.48 0 0 0 8.3 6.07a12.94 12.94 0 0 1-9.41-4.77 4.48 4.48 0 0 0 1.39 6A4.42 4.42 0 0 1 .64 6.16v.05a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2.02.08 4.48 4.48 0 0 0 4.19 3.11A9 9 0 0 1 0 18.57a12.94 12.94 0 0 0 7 2.05c8.33 0 12.88-6.91 12.88-12.88 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 24 4.59a9.07 9.07 0 0 1-2.6.71z"></path>
                            </svg>
                        </a>
                        <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                            {/* Instagram icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22A2D7" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37a4 4 0 1 1-4.63-4"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
