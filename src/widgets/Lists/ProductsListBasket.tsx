"use client"

import {ScrollArea} from "@/components/ui/scroll-area";
import {useProductStore} from "@/widgets/Lists/store/storeProduct";
import CardBasketProduct from "@/entites/Cards/CardBasketProduct";

const ProductsListBasket = () => {
    const products = useProductStore(state => state.products);
    console.log(products);

    return (
        <ScrollArea className="h-[400px] w-full rounded-md border">
            {products.map((product) => (
                <CardBasketProduct
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    description={product.description}
                    count={product.count}
                    title={product.title}
                    image_url={product.image_url}
                />
            ))}
            {products.length < 1 && (
                <div className='w-full h-[400px] flex items-center justify-center bg-zinc-500'>
                    <h3 className='text-5xl text-white'>
                        Пока корзина пуста
                    </h3>
                </div>
            )}
        </ScrollArea>
    );
};

export default ProductsListBasket;