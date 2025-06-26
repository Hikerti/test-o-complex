"use client"

import {fetchProducts} from "@/app/api/fetchProducts";
import CardProduct from "@/entites/Cards/CardProduct";
import {ProductData, ProductsResponse} from "@/widgets/Lists/interface/interface";
import {useEffect, useRef, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";

const ProductsList = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadProducts = async () => {
            const data: ProductsResponse = await fetchProducts(page, 9);
            setProducts(prev => [...prev, ...data.items]);
            if (data.items.length < 9) setHasMore(false);
        };
        loadProducts();
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loaderRef.current, hasMore]);



    return (
        <section>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
                {products.map((product) => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image_url={product.image_url}
                        description={product.description}
                    />
                ))}
            </div>
            {hasMore && (
                <div ref={loaderRef} className="text-center h-[400px] py-4">
                    <Skeleton className='h-full'/>
                </div>
            )}
        </section>
    );
};

export default ProductsList;