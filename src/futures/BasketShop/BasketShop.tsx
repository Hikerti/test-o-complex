import {ProductSendForm, ProductsListBasket} from "@/widgets";

const BasketShop = () => {
    return (
        <section className='w-full flex flex-col gap-4 py-4'>
            <h2 className='text-white text-3xl text-center '>Добавленные товары</h2>
            <ProductsListBasket></ProductsListBasket>
            <ProductSendForm></ProductSendForm>
        </section>
    );
};

export default BasketShop;