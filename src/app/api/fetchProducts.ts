export const fetchProducts = async (page: number, page_size: number) => {
    const products = await fetch(`http://o-complex.com:1337/products?page=${page}&page_size=${page_size}`);
    return products.json();
}