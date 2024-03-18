import s from "./page.module.scss";
import ArticleService from "@/services/ArticleService";
import Header from "@/components/Header/Header";

export default async function NewsArticle({ params }) {
    const data = await ArticleService.getArticle(params.slug);

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

    const articles = await ArticleService.allArticles();

    return (
        <>
            <Header theme={2} sendData={sendDataCall} data={articles} />
            <section className={s.wrap}>
                <div className="container">
                    {data.detail ? (
                        <h1 className={s.detail}>{data.detail}</h1>
                    ) : (
                        <>
                            <h1>{data.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data.content,
                                }}
                                className={s.content}
                            ></div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
