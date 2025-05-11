import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CoinLottie from './components/CoinLottie.tsx';

import logo from './assets/logo.png';           // Логотип TokenMeter
import heroBg from './assets/hero_bg.png';        // Фоновое изображение для Hero-блока
import icon_1 from './assets/icon_coin_1.png';
import icon_2 from './assets/icon_coin_2.png';
import icon_3 from './assets/icon_coin_3.png';
import icon_4 from './assets/icon_coin_4.png';
import TgLogo from './assets/tg_logo.svg?react';
import XLogo from './assets/x_logo.svg?react';
import DisLogo from './assets/dis_logo.svg?react';

const App: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen((prev) => !prev);
    const cardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!cardsRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // при пересечении 50 % высоты блока добавляем класс visible
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);       // больше не наблюдаем
                }
            },
            { threshold: 0.5 }                         // половина блока во вьюпорте
        );

        observer.observe(cardsRef.current);
        return () => observer.disconnect();
    }, []);

    const aboutRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');  // .about → .visible
                    io.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }                          // половина секции
        );
        if (aboutRef.current) io.observe(aboutRef.current);
        return () => io.disconnect();
    }, []);

    return (
        <div className="app-wrapper">
            {/* Хэдер */}
            <header className="header">
                <div className="header-inner">
                    <div className="logo-container">
                        <img src={logo} alt="TokenMeter Logo" className="logo"/>
                        <span className="project-name">TokenMeter</span>
                    </div>
                    <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
                        <a href="#" target="_blank" aria-label="Telegram">
                            <TgLogo className="nav-icon"/>
                        </a>
                        <a href="#" target="_blank" aria-label="X">
                            <XLogo className="nav-icon"/>
                        </a>
                        <a href="#" target="_blank" aria-label="Discord">
                            <DisLogo className="nav-icon"/>
                        </a>
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
                    {/* Бегущая строка под кнопкой hero */}
                    <div className="news-ticker fade-in" data-speed="0.3">
                        <div className="ticker-track">
                            {/* дублируем набор, чтобы получилась бесшовная лента */}
                            {[1, 2].map((dup) => (
                                <React.Fragment key={dup}>
                                    <div className="ticker-item">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22A2D7"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                        <span>Приобретайте цифровые метры через Телеграм-бот</span>
                                    </div>

                                    <div className="ticker-item">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22A2D7"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                        <span>Стоимость токенов привязана к реальной недвижимости</span>
                                    </div>

                                    <div className="ticker-item">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22A2D7"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                        <span>Получайте прибыль при росте стоимости квадратных метров</span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Блок "О проекте" */}
            <section className="about" id="about" ref={aboutRef}>
                <div className="about-content">
                    <div className="about-text">
                        <h2>Что такое цифровой квадратный метр?</h2>
                        <p>
                            Это цифровой финансовый актив или токен, цена которого твердо привязана к стоимости
                            реального
                            квадратного метра недвижимости в ведущих городах мира. Стоимость токена меняется вместе с
                            ценой квадратного метра на каждом этапе строительства проекта.
                        </p>
                    </div>
                    <div className="about-visual">
                        <CoinLottie />
                    </div>
                </div>
            </section>
            {/* Блок "Карточки" */}
            <section className="cards" ref={cardsRef}>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_1} alt="Иконка 1"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">Высокая доходность</h3>
                        <p className="card-text">Рост цены свыше 35%*</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_4} alt="Иконка 2"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">Низкий порог входа</h3>
                        <p className="card-text">Купите токен на любую сумму</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_3} alt="Иконка 3"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">Недвижимость по всему миру</h3>
                        <p className="card-text">
                            Покупайте и продавайте цифровые квадратные метры по всему миру
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_2} alt="Иконка 4"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">Доступность покупки</h3>
                        <p className="card-text">
                            Не нужно иметь гражданство страны, чтобы инвестировать в ее недвижимость
                        </p>
                    </div>
                </div>
            </section>
            {/* ---------- Блок “Заключение” ---------- */}
            <section className="conclusion" id="conclusion">
                <div className="conclusion-content">
                    <div className="conclusion-text">
                        <h2>
                            Начните инвестировать <br />
                            в цифровые квадратные метры <br />
                            с TokenMeter уже сегодня
                        </h2>

                        <a
                            href="https://t.me/your_telegram_handle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="conclusion-button"
                        >
                            Запустить TokenMeter в Telegram
                        </a>
                    </div>

                    <div className="conclusion-visual">
                        <img src={logo} alt="Интерфейс TokenMeter-бота" />
                    </div>
                </div>
            </section>
            {/* Остальные блоки, например, FAQ, контакты и футер – можно добавить по аналогичной схеме */}
            <footer className="footer" id="contacts">
                <div className="footer-content">
                    <div className="logo-container">
                        <img src={logo} alt="TokenMeter Logo" className="footer-logo"/>
                    </div>
                    <div className="footer-copy">© 2025 TokenMeter</div>
                    <div className="footer-social">
                        <a href="#" target="_blank" aria-label="Telegram">
                            <TgLogo className="nav-icon"/>
                        </a>
                        <a href="#" target="_blank" aria-label="X">
                            <XLogo className="nav-icon"/>
                        </a>
                        <a href="#" target="_blank" aria-label="Discord">
                            <DisLogo className="nav-icon"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
