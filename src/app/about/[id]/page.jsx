import Header from "@/components/Header/Header";
import Location from "@/components/Location/Loctaion";
import ArticleService from "@/services/ArticleService";
import ProjectsService from "@/services/ProjectsService";
import s from "./page.module.scss";

export default async function ProjectArticle({ params: { id } }) {
    const { content } = await ProjectsService.getProject(id);

    const sendData = async (params) => {
        "use server";
        const data = await FormService.commercial(params);

        return data;
    };

    const articles = await ArticleService.allArticles();

    const sendDataCall = async (params) => {
        "use server";
        const data = await FormService.call(params);

        return data;
    };

    return (
        <div>
            <Header theme={2} sendData={sendDataCall} data={articles} />
            <div className="container">
                <div
                    style={{ color: "#000", padding: "60px 0" }}
                    className={s.content}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>
        </div>
    );
}
