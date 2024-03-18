import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import Intro from "@/components/Intro/Intro";
import SecureBlock from "@/components/SecureBlock/SecureBlock";
import ToolsBlock from "@/components/ToolsBlock/ToolsBlock";
import AboutService from "@/services/AboutService";
import ArticleService from "@/services/ArticleService";
import ProjectsService from "@/services/ProjectsService";
import Link from "next/link";
import s from "./page.module.scss";

export default async function About() {
    const articles = await ArticleService.allArticles();

    const aboutInfo = await AboutService.getInfo();

    const projects = await ProjectsService.allProjects();

    const sendData = async (params) => {
        "use server";
        const data = await FormService.commercial(params);

        return data;
    };

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <>
            <Intro
                title={{
                    text: "АЛКАМ ПЛЮС  — НАДЕЖНЫЙ ПОСТАВЩИК МЕТАЛЛУРГИЧЕСКОЙ ПРОДУКЦИИ С 2002 ГОДА",
                    style: { maxWidth: 1130, marginTop: 77 },
                }}
                video="/videos/about.mp4"
                articles={articles}
                sendData={sendDataCall}
                paths={["О компании"]}
                buttonText="Подробнее о компании"
                scrollTo="about"
            >
                <p className={s.about__text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.
                </p>
            </Intro>
            <section className={s.about__info}>
                <div className="container">
                    <div
                        className={s.content}
                        dangerouslySetInnerHTML={{
                            __html:
                                aboutInfo.text || "<p>Пока что ничего нет</p>",
                        }}
                    ></div>
                    <div className={s.about__items}>
                        <div className={s.about__item}>
                            <img src="/images/about/img2.png" alt="" />
                            <h5 className={s.about__item_title}>
                                Компания аккредитованана <br /> тендерных
                                площадках
                            </h5>
                            <p className={s.about__item_text}>
                                Мы исполняем контрактыв соответствии с
                                федеральнымизаконами №44-ФЗ №223-ФЗ №275-ФЗ
                            </p>
                        </div>
                        <div className={s.about__item}>
                            <img src="/images/about/img1.png" alt="" />
                            <h5 className={s.about__item_title}>
                                Партнеры по РФ более <br /> 150 предприятий
                            </h5>
                            <p className={s.about__item_text}>
                                Мы имеем партнерские отношения с более 150
                                предприятиями на територии РФ и СНГ
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.about__desc}>
                <div className="container">
                    <BlockTitle style={{ marginBottom: 50 }}>
                        АЛКАМ ПЛЮС
                    </BlockTitle>
                    <div className={s.desc__wrap}>
                        <p className={s.desc__text}>
                            Lorem Ipsum является стандартной "рыбой" для текстов
                            на латинице с начала XVI века. В то время некий
                            безымянный печатник создал большую коллекцию
                            размеров и форм шрифтов, используя Lorem Ipsum
                            является стандартной "рыбой" для текстов на латинице
                            с начала XVI века. В то время некий безымянный
                            печатник создал большую коллекцию размеров и форм
                            шрифтов, используя 
                            <br />
                            <br />
                            Lorem Ipsum является стандартной "рыбой" для текстов
                            на латинице с начала XVI века. В то время некий
                            безымянный печатник создал большую коллекцию
                            размеров и форм шрифтов, используя 
                        </p>
                        <div className={s.desc__imgs}>
                            <img src="/images/about/item1.png" alt="" />
                            <img src="/images/about/item2.png" alt="" />
                            <img src="/images/about/item1.png" alt="" />
                            <img src="/images/about/item2.png" alt="" />
                            <img src="/images/about/item1.png" alt="" />
                            <img src="/images/about/item2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <SecureBlock />
            <ToolsBlock />
            <section className={s.projects}>
                <div className="container">
                    <BlockTitle style={{ marginBottom: 47 }}>
                        НАШИ ПРОЕКТЫ ПО ПОСТАВКЕ АЛЮМИНИЕВОЙ ПРОДУКЦИИ
                    </BlockTitle>
                    {projects.map(({ preview_image, preview, id }) => {
                        return (
                            <div className={s.project} key={preview_image + id}>
                                <div className={s.project__img}>
                                    <img src={preview_image} alt="" />
                                </div>
                                <div className={s.project__content}>
                                    <p className={s.project__content_text}>
                                        {preview}
                                    </p>
                                    <Link href={`about/${id}`}>
                                        <ButtonRed>Читать подробнее</ButtonRed>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
