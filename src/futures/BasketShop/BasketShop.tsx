import {ProductSendForm} from "@/widgets";
import {ProductsListBasket} from "@/entites";

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