import {fetchProducts} from "@/app/api/fetchProducts";
import CardProduct from "@/entites/Cards/CardProduct";
import {ProductsResponse} from "@/widgets/Lists/interface/interface";

const ProductsList = async () => {
    const products: ProductsResponse = await fetchProducts(1, 3)

    return (
        <section>
            {products.items.map((product) => (
                <CardProduct
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image_url={product.image_url}
                    description={product.description}
                />
            ))}
        </section>
    );
};

export default ProductsList;