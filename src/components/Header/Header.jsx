"use client";

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import CallPopup from "../CallPopup/CallPopup";
import NewsSection from "../NewsSection/NewsSection";
import s from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import MobileItem from "./MobileItem/MobileItem";

export default function Header({ data, theme = 1, sendData }) {
    const [openTab, setOpenTab] = useState(undefined);
    const [openPopup, setOpenPopup] = useState(false);
    const pathname = usePathname();

    const [open, openMenu] = useState(false);

    return (
        <div className="container">
            {openPopup && (
                <CallPopup
                    sendData={sendData}
                    onClick={() => setOpenPopup(false)}
                />
            )}
            <div className={classNames(s.mobile, !open ? s.mobile__hide : "")}>
                <ul className={s.mobile__list}>
                    <MobileItem
                        href={"/products"}
                        title="Продукция"
                    ></MobileItem>
                    <MobileItem href={"#"} title="Услуги">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="О компании">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="Сотрудничество">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="Партнерам">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="Новости">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="Контакты">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                    <MobileItem href={""} title="Оплата и доставка">
                        <li className={s.mobile__item}>
                            <Link href="#">Резка металла</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Термообработка</Link>
                        </li>
                        <li className={s.mobile__item}>
                            <Link href="#">Браширование</Link>
                        </li>
                    </MobileItem>
                </ul>
            </div>
            <header
                className={classNames(s.header, theme === 2 && s.header__theme)}
            >
                <div className="container header__container">
                    <div className={s.header__top}>
                        <div className={s.logo}>
                            <div
                                className={classNames(
                                    s.logo__menu_mobile,
                                    theme === 2 ? s.logo__menu_mobile_back : ""
                                )}
                                onClick={() => openMenu(!open)}
                            >
                                <img src="/images/mobile-menu.png" alt="" />
                            </div>
                            <Link className={s.logo__link} href="/">
                                <img
                                    className={s.logo__img}
                                    src="/images/logo.png"
                                    alt=""
                                />
                                <img
                                    className={classNames(s.logo__mobile)}
                                    src="/images/logo-mobile.png"
                                    alt=""
                                />
                            </Link>
                            <p className={s.logo__text}>
                                Производство алюминиевых <br /> полуфабрикатов
                            </p>
                            <div
                                className={s.logo__call_mobile}
                                onClick={() => setOpenPopup(true)}
                            >
                                <img src="/images/mobile-call.svg" alt="" />
                            </div>
                        </div>
                        <p className={s.location}>
                            Свердловская область <br /> г. Каменск - Уральский
                        </p>
                        <div className={s.tel}>
                            <a href="tel:+73439399440">+7(3439) 399-440</a>
                            <p onClick={() => setOpenPopup(!openPopup)}>
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.nav__list}>
                            <Link href="/products" className={classNames(s.nav__item, s.nav__item__arrow)}>
                                Продукция
                            </Link>
                            <li
                                className={ s.nav__item}
                                onClick={() =>
                                    openTab !== 2
                                        ? setOpenTab(2)
                                        : setOpenTab(undefined)
                                }
                            >
                                Услуги
                            </li>
                            <li
                                className={s.nav__item}
                                onClick={() =>
                                    openTab !== 3
                                        ? setOpenTab(3)
                                        : setOpenTab(undefined)
                                }
                            >
                                О компании
                            </li>
                            <li
                                className={s.nav__item}
                                onClick={() =>
                                    openTab !== 4
                                        ? setOpenTab(4)
                                        : setOpenTab(undefined)
                                }
                            >
                                Сотрудничество
                            </li>
                            <li
                                className={classNames(s.nav__item, s.nav__item__arrow)}
                                onClick={() =>
                                    openTab !== 5
                                        ? setOpenTab(5)
                                        : setOpenTab(undefined)
                                }
                            >
                                Доставка и оплата
                            </li>
                            {pathname === "/news" ? (
                                <ScrollLink
                                    activeClass="active"
                                    to="news"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                    className={s.nav__item}
                                    onClick={() => setOpenTab(7)}
                                >
                                    Новости
                                </ScrollLink>
                            ) : (
                                <li
                                    className={s.nav__item}
                                    onClick={() =>
                                        openTab !== 6
                                            ? setOpenTab(6)
                                            : setOpenTab(undefined)
                                    }
                                >
                                    Новости
                                </li>
                            )}
                            <ScrollLink
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className={classNames(s.nav__item, s.nav__item__arrow)}
                                onClick={() => setOpenTab(7)}
                            >
                                Контакты
                            </ScrollLink>
                        </ul>
                    </nav>
                </div>
                {openTab === 6 && (
                    <div
                        style={{
                            maxWidth: "auto !important",
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                        className={classNames(s.menu, s.menu__news)}
                    >
                        <NewsSection data={data} isHeader={true} />
                    </div>
                )}
                {openTab === 2 && (
                    <div className={s.menu}>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    <Link href="services">Резка металла</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">
                                        Лентопильная резка
                                    </Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">
                                        Лентопильная резка
                                    </Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">
                                        Лентопильная резка
                                    </Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">
                                        Лентопильная резка
                                    </Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">
                                        Лентопильная резка
                                    </Link>
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={"services"}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Термообработка</Link>
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={"services"}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    <Link href="services">Браширование</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Браширование</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Браширование</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Браширование</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Лентопильная резка
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="services">Браширование</Link>
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={"services"}>
                                К полному списку
                            </Link>
                        </div>
                    </div>
                )}
                {openTab === 3 && (
                    <div className={s.menu}>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Производство</Link>
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={"about"}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    <Link href="about">Упаковка и склады</Link>
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={"about"}>
                                К полному списку
                            </Link>
                        </div>
                    </div>
                )}
                {openTab === 4 && (
                    <div className={s.menu}>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Предприятиям
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 2
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 3
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 4
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 5
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Металотрейдерам
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Контрагентам
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Вакансии
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Предложение 1
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                    </div>
                )}
                {openTab === 5 && (
                    <div className={s.menu}>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Доставка
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                        <div className={s.item}>
                            <ul className={s.item__list}>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__title
                                    )}
                                >
                                    Оплата
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                                <li
                                    className={classNames(
                                        s.menu__item,
                                        s.menu__text
                                    )}
                                >
                                    Доставка N1
                                </li>
                            </ul>
                            <Link className={s.menu__link} href={""}>
                                К полному списку
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
