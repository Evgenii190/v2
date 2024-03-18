import ButtonRed from "@/components/ButtonRed/ButtonRed";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import NewsSection from "@/components/NewsSection/NewsSection";
import ArticleService from "@/services/ArticleService";
import s from "./page.module.scss";

export default async function News() {
    const data = await ArticleService.allArticles();

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
                    text: "НОВОСТИ И СТАТЬИ",
                    style: { marginTop: 93, marginBottom: 195 },
                }}
                articles={data}
                video="/videos/about.mp4"
                sendData={sendDataCall}
                paths={["Новости"]}
                buttonText={"Новости и статьи"}
                scrollTo="news"
            >
                <p className={s.text}>
                    "АЛКАМ плюс" успешно осуществляет свою деятельность на рынке
                    изготовления полуфабрикатов из цветных и черных металлов с
                    2002 года.
                </p>
            </Intro>
            <NewsSection data={data} sliderOn={false} />
        </>
    );
}
