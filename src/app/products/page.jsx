import BlockTitle from "@/components/BlockTitle/BlockTitle";
import ButtonRed from "@/components/ButtonRed/ButtonRed";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import ArticleService from "@/services/ArticleService";
import ProductService from "@/services/ProductService";
import s from "./page.module.scss";

export default async function ProductsPage({ searchParams }) {
    const articles = await ArticleService.allArticles();

    const filtersList = await ProductService.getFilters();

    const products = await ProductService.productsQueries(searchParams);

    async function filtredProducts(params, page) {
        "use server";

        return await ProductService.productsQueries(params, page);
    }

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
            <Header data={articles} theme={2} sendData={sendDataCall} />
            <div className="container">
                <BlockTitle
                    style={{ color: "#000", marginTop: 64, marginBottom: 86 }}
                >
                    ПРОДУКЦИЯ КОМПАНИИ
                </BlockTitle>
                <Products
                    filtredProducts={filtredProducts}
                    productsList={products}
                    filtersList={filtersList}
                    searchParams={searchParams}
                />
            </div>
            <section className={s.supplies}>
                <div className="container">
                    <div className={s.supplies__wrap}>
                        <BlockTitle>
                            ОПТОВЫЕ ПОСТАВКИ <br /> МЕТАЛЛОПРОКАТА
                        </BlockTitle>
                        <p className={s.supplies__text}>
                            Компания АЛКАМ плюс, кроме продукции собственного
                            изготовления, предлагает сотрудничество в области
                            поставок алюминиевых (медных/бронзовых/латунных)
                            полуфабрикатов производства крупнейших российских
                            металлургических предприятий.
                            <br />
                            <br />
                            Наши преимущества:
                            <br />
                            <br />
                            - ЧЕСТНАЯ ЦЕНА
                            <br />
                            - ПРИЕМЛЕМЫЕ УСЛОВИЯ ОПЛАТЫ
                            <br />
                            - ПОСТАВКИ ИЗ НАЛИЧИЯ
                            <br />- БЫСТРОЕ ИЗГОТОВЛЕНИЕ ПОД ЗАКАЗ на
                            заводах-партнерах
                        </p>
                    </div>
                </div>
            </section>
            <FormSection />
        </>
    );
}
