import {ProductSendForm, ProductsListBasket} from "@/widgets";

const BasketShop = () => {
    return (
        <section>
            <h2>Добавленные товары</h2>
            <ProductsListBasket></ProductsListBasket>
            <ProductSendForm></ProductSendForm>
        </section>
    );
};

export default BasketShop;