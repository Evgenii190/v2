"use client";

import { useEffect, useState } from "react";
import ButtonRed from "../ButtonRed/ButtonRed";
import ButtonWhite from "../ButtonWhite/ButtonWhite";
import Header from "../Header/Header";
import Title from "../Title/Title";
import s from "./Intro.module.scss";
import servicesStyle from '../../app/services/page.module.scss'
import Location from "../Location/Loctaion";
import { usePathname } from "next/navigation";
import { Element, Link as ScrollLink } from "react-scroll";

export default function Intro({ title, articles, isService, children, sendData, paths, buttonText, scrollTo, video }) {

    let intros = [
        {
            id: 1,
            title: title?.text,
            text: "Наша компания предлагает полный комплекс услуг по резке цветного металлопроката в размер: Правка и резка алюминиевых листов всех сплавов, в том числе на карточки; Резка плит в размер по чертежам, резка прутков; Резка рулонного алюминия и его сплавов на листы в том числе в нестандартный раскрой по ширине и длине.",
            style: title?.style,
            path: 'Резка металлопроката'
        },
        {
            id: 2,
            title: "ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО ТЕРМООБРАБОТКЕ МЕТАЛЛОПРОКАТА",
            text: "Мы предлагаем полный комплекс услуг по термической обработке алюминиевых полуфабрикатов. Наши специалисты готовы выполнить работы любой сложности «под ключ» в рамках серийного изготовления или индивидуального заказа",
            style: {marginTop: 34, maxWidth: 930},
            path: 'Термообработка'
        },
        {
            id: 3,
            title: "ОКАЗЫВАЕМ КОМПЛЕКС УСЛУГ ПО БРАШИРОВАНИЮ МЕТАЛЛОПРОКАТА",
            text: "Наша упаковка обеспечивает полную сохранность продукции при транспортировке и хранении. Мы соблюдаем требования ГОСТ на упаковку 9.519-93.",
            style: {marginTop: 36, maxWidth: 871},
            path: 'Браширование'
        }

    ]

    const [currentIntro, setCurrentIntro] = useState(intros[0]);

    return (
        <section className={s.intro}>
                <video style={{height: '100%'}} className={"video"} autoPlay
                        muted
                        loop preload="auto">
                <source src={video || "/videos/services2.mp4"} />
                    Your browser does not support the video tag.
                </video>
            <div className="wrapper">
                <Header data={articles} sendData={sendData} />
                <div className="container">
                    <Location paths={isService ? [...paths,  currentIntro.path] : paths} />
                    <Title style={...currentIntro.style}>{currentIntro.title}</Title>  
                    {children}
                    {!isService && <div className={s.button}>
                        <ScrollLink
                            activeClass="active"
                            to={scrollTo}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >
                            <ButtonRed>
                                {buttonText}
                            </ButtonRed>
                        </ScrollLink>
                    </div>}
                    {isService && <p className={ servicesStyle.services__text}>
                        {currentIntro.text}
                    </p>}
                    {isService && (
                        <div className={s.services__buttons}>
                            {currentIntro.id === 1 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[0])
                                    }
                                >
                                    Резка металлопроката
                                </ButtonWhite>
                            )}
                            {currentIntro.id === 2 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка металлопроката
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[1])
                                    }
                                >
                                    Тремоообработка металлопроката
                                </ButtonWhite>
                            )}
                            {currentIntro.id === 3 ? (
                                <ButtonRed
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    БРАШИРОВАНИЕ ПОВЕРХНОСТИ
                                </ButtonRed>
                            ) : (
                                <ButtonWhite
                                    style={{ fontSize: 14 }}
                                    onClick={() =>
                                        setCurrentIntro(intros[2])
                                    }
                                >
                                    БРАШИРОВАНИЕ ПОВЕРХНОСТИ
                                </ButtonWhite>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Element name="about" />
        </section>
    );
}
