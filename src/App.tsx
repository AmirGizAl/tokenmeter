import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CoinLottie from './components/CoinLottie.tsx';
import { useTranslation } from 'react-i18next';

import logo from './assets/logo.png';           // Логотип TokenMeter
import heroBg from './assets/hero_bg.png';        // Фоновое изображение для Hero-блока
import icon_1 from './assets/icon_coin_1.png';
import icon_2 from './assets/icon_coin_2.png';
import icon_3 from './assets/icon_coin_3.png';
import icon_4 from './assets/icon_coin_4.png';
import building from './assets/building.png';
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

    const { t, i18n } = useTranslation();
    const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
        e.target.blur();                 // ⬅️  снимаем focus – цвет вернётся
    };

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
                        <a href="https://t.me/token_meter" target="_blank" aria-label="Telegram"><TgLogo className="nav-icon"/></a>
                        <a href="#" target="_blank" aria-label="X"><XLogo className="nav-icon"/></a>
                        <a href="#" target="_blank" aria-label="Discord"><DisLogo className="nav-icon"/></a>
                        <select className="lang-switcher" value={i18n.resolvedLanguage} onChange={handleLangChange}>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </nav>
                    <div className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
                        <span></span><span></span><span></span>
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
                    <h1 className="fade-in" data-speed="0.3">{t('hero.title')}</h1>
                    <a
                        className="cta-button fade-in delay"
                        data-speed="0.3"
                        href="https://t.me/token_meter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('hero.cta')}
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
                                        <span>{t('ticker.buy')}</span>
                                    </div>

                                    <div className="ticker-item">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22A2D7"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                        <span>{t('ticker.price')}</span>
                                    </div>

                                    <div className="ticker-item">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22A2D7"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        </svg>
                                        <span>{t('ticker.profit')}</span>
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
                        <h2>{t('about.title')}</h2>
                        <p>{t('about.text')}</p>
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
                        <h3 className="card-title">{t('cards.c1.h')}</h3>
                        <p className="card-text">{t('cards.c1.p')}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_4} alt="Иконка 2"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">{t('cards.c2.h')}</h3>
                        <p className="card-text">{t('cards.c2.p')}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_3} alt="Иконка 3"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">{t('cards.c3.h')}</h3>
                        <p className="card-text">{t('cards.c3.p')}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={icon_2} alt="Иконка 4"/>
                    </div>
                    <div className="card-text-block">
                        <h3 className="card-title">{t('cards.c4.h')}</h3>
                        <p className="card-text">{t('cards.c4.p')}</p>
                    </div>
                </div>
            </section>
            {/* ---------- Блок “Заключение” ---------- */}
            <section className="conclusion" id="conclusion">
                <div className="conclusion-content">
                    <div className="conclusion-text">
                        <h2>{t('conclusion.title')}</h2>

                        <a
                            href="https://t.me/token_meter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="conclusion-button"
                        >
                            {t('conclusion.cta')}
                        </a>
                    </div>

                    <div className="conclusion-visual">
                        <img src={building} alt="Интерфейс TokenMeter-бота" />
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
                        <a href="https://t.me/token_meter" target="_blank" aria-label="Telegram">
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
