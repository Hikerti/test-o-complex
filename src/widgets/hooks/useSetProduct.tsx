import {useProductStore} from "@/widgets/Lists/store/storeProduct";
import {useEffect} from "react";
import {ProductStoreData} from "@/widgets/Lists/interface/interface";
import {useSetProductProps} from "@/widgets/interface/interface";

const useSetProduct = ({id, active, count, title, image_url, description, price, setActive}: useSetProductProps) => {

    const setProduct = useProductStore(state => state.setProduct);
    const updateCountProduct = useProductStore(state => state.updateCountProduct);

    useEffect(() => {

        const product: ProductStoreData = {
            id: id,
            price: price,
            title: title,
            image_url: image_url,
            description: description,
            count: count,
        }

        if (!active) {
            setProduct(product)
        }
        }, [active]);

    useEffect(() => {
        updateCountProduct(id, count)
    }, [count]);

    return null;
};

export default useSetProduct;