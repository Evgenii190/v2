import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./SecureBlock.module.scss";
import SliderComponent from "../Slider/Slider";

export default function SecureBlock() {
    return (
        <section className={s.secure}>
            <div className="container">
                <div className={s.secure__top}>
                    <BlockTitle style={{ maxWidth: 872 }}>
                        АЛКАМ ПЛЮС — НАДЕЖНЫЙ ПОСТАВЩИК АЛЛЮМИНИЕВОГО ПРОКАТА С
                        2002 ГОДА
                    </BlockTitle>
                    <p className={s.secure__top_info}>
                        Cоответствует государственным <br /> стандартам Гост, ТУ
                        и ОСТ
                    </p>
                </div>
                <div className={s.secure__slider}>
                    <SliderComponent
                        items={[
                            "/images/secure/s1.png",
                            "/images/secure/s2.png",
                            "/images/secure/s1.png",
                            "/images/secure/s2.png",
                            "/images/secure/s1.png",
                            "/images/secure/s2.png",
                            "/images/secure/s1.png",
                            "/images/secure/s2.png",
                        ]}
                        show={4}
                        infinity={true}
                        responsive={[
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
