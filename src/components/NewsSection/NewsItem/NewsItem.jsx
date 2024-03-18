import Link from "next/link";
import s from "./NewsItem.module.scss";

export default function NewsItem({ article, style }) {
    return (
        <div className={s.item} style={style}>
            <img
                className={s.item__image}
                src={`${process.env.BASE_URL + article.image_url}`}
                alt=""
            />
            <div className={s.content}>
                <h5 className={s.title}>{article.title}</h5>
                <p className={s.text}>{article.content_concise}</p>
                <Link className={s.link} href={"news/" + article.slug}>
                    <div className={s.button}>
                        <p>Читать подробнее</p>
                        <div className={s.button_arrow}>
                            <img src="./images/news/arrow.png" alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
