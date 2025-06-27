export interface ProductData {
    id: number;
    image_url: string
    title: string
    description: string
    price: number
}

export interface ProductsResponse {
    page: number;
    amount: number
    total: number
    items: ProductData[]
}

export interface ProductStoreData extends ProductData {
    count: number;
}

export interface useProductStoreProps {
    products: ProductStoreData[];

    setProduct: (productsData: ProductStoreData) => void;
    updateCountProduct: (id: number, count: number) => void;
    deleteProduct: (id: number) => void;
}