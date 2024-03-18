"use client";

import classNames from "classnames";
import { useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import SliderComponent from "../Slider/Slider";
import s from "./ToolsBlock.module.scss";

export default function ToolsBlock() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className={s.tools}>
            <div className="container">
                <BlockTitle
                    style={{
                        paddingTop: 110,
                        paddingBottom: 56,
                    }}
                >
                    НА ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКЕ ООО «АЛКАМ ПЛЮС» <br />
                    РАЗМЕЩАЕТСЯ СЛЕДУЮЩЕЕ ОБОРУДОВАНИЕ:
                </BlockTitle>
                <ul className={s.tools__items}>
                    <li
                        className={classNames(
                            s.tools__item,
                            activeTab === 1 && s.tools__item__active
                        )}
                        onClick={() => setActiveTab(1)}
                    >
                        Линия термообработки
                    </li>
                    <li
                        className={classNames(
                            s.tools__item,
                            activeTab === 2 && s.tools__item__active
                        )}
                        onClick={() => setActiveTab(2)}
                    >
                        Лаборатория
                    </li>
                    <li
                        className={classNames(
                            s.tools__item,
                            activeTab === 3 && s.tools__item__active
                        )}
                        onClick={() => setActiveTab(3)}
                    >
                        Склад
                    </li>
                    <li
                        className={classNames(
                            s.tools__item,
                            activeTab === 4 && s.tools__item__active
                        )}
                        onClick={() => setActiveTab(4)}
                    >
                        Цех
                    </li>
                </ul>
                {activeTab === 1 && (
                    <div className={s.content}>
                        <div className={s.content__wrap}>
                            <h5 className={s.subtitle}>
                                Линия термообработки и окончательной отделки{" "}
                                <br />
                                листа, в которую входит следущее оборудование
                            </h5>
                            <ul className={s.content__list}>
                                <li className={s.list__item}>
                                    01 - Браш машина – (1ед)
                                </li>
                                <li className={s.list__item}>
                                    02 - Оборудование для резки плит и прутков –
                                    (2 ед)
                                </li>
                                <li className={s.list__item}>
                                    03 - Печь для нагрева металлопроката – (3
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    04 - Закалочная камера - (3 ед)
                                </li>
                                <li className={s.list__item}>
                                    05 - РПМ (Ролико - правильная машина) – (4
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    06 - Гильотинные ножницы - (2ед)
                                </li>
                                <li className={s.list__item}>
                                    07 - Линия резки рулонов - (3 ед)
                                </li>
                            </ul>
                        </div>
                        <div className={s.tools__slider}>
                            <SliderComponent
                                items={[
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                ]}
                            />
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className={s.content}>
                        <div className={s.content__wrap}>
                            <h5 className={s.subtitle}>
                                Линия термообработки и окончательной отделки{" "}
                                <br />
                                листа, в которую входит следущее оборудование
                            </h5>
                            <ul className={s.content__list}>
                                <li className={s.list__item}>
                                    01 - Браш машина – (2ед)
                                </li>
                                <li className={s.list__item}>
                                    02 - Оборудование для резки плит и прутков –
                                    (5 ед)
                                </li>
                                <li className={s.list__item}>
                                    03 - Печь для нагрева металлопроката – (3
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    04 - Закалочная камера - (3 ед)
                                </li>
                                <li className={s.list__item}>
                                    05 - РПМ (Ролико - правильная машина) – (4
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    06 - Гильотинные ножницы - (2ед)
                                </li>
                                <li className={s.list__item}>
                                    07 - Линия резки рулонов - (3 ед)
                                </li>
                            </ul>
                        </div>
                        <div className={s.tools__slider}>
                            <SliderComponent
                                items={[
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                ]}
                            />
                        </div>
                    </div>
                )}
                {activeTab === 3 && (
                    <div className={s.content}>
                        <div className={s.content__wrap}>
                            <h5 className={s.subtitle}>
                                Линия термообработки и окончательной отделки{" "}
                                <br />
                                листа, в которую входит следущее оборудование
                            </h5>
                            <ul className={s.content__list}>
                                <li className={s.list__item}>
                                    01 - Браш машина – (10ед)
                                </li>
                                <li className={s.list__item}>
                                    02 - Оборудование для резки плит и прутков –
                                    (122 ед)
                                </li>
                                <li className={s.list__item}>
                                    03 - Печь для нагрева металлопроката – (3
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    04 - Закалочная камера - (3 ед)
                                </li>
                                <li className={s.list__item}>
                                    05 - РПМ (Ролико - правильная машина) – (4
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    06 - Гильотинные ножницы - (2ед)
                                </li>
                                <li className={s.list__item}>
                                    07 - Линия резки рулонов - (3 ед)
                                </li>
                            </ul>
                        </div>
                        <div className={s.tools__slider}>
                            <SliderComponent
                                items={[
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                ]}
                            />
                        </div>
                    </div>
                )}
                {activeTab === 4 && (
                    <div className={s.content}>
                        <div className={s.content__wrap}>
                            <h5 className={s.subtitle}>
                                Линия термообработки и окончательной отделки{" "}
                                <br />
                                листа, в которую входит следущее оборудование
                            </h5>
                            <ul className={s.content__list}>
                                <li className={s.list__item}>
                                    01 - Браш машина – (14ед)
                                </li>
                                <li className={s.list__item}>
                                    02 - Оборудование для резки плит и прутков –
                                    (2 ед)
                                </li>
                                <li className={s.list__item}>
                                    03 - Печь для нагрева металлопроката – (3
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    04 - Закалочная камера - (3 ед)
                                </li>
                                <li className={s.list__item}>
                                    05 - РПМ (Ролико - правильная машина) – (4
                                    ед)
                                </li>
                                <li className={s.list__item}>
                                    06 - Гильотинные ножницы - (2ед)
                                </li>
                                <li className={s.list__item}>
                                    07 - Линия резки рулонов - (3 ед)
                                </li>
                            </ul>
                        </div>
                        <div className={s.tools__slider}>
                            <SliderComponent
                                items={[
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                    "/images/tools-block/slide.png",
                                ]}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
