import { create } from "zustand";
import {ProductStoreData, useProductStoreProps} from "../interface/interface";

export const useProductStore = create<useProductStoreProps>((set, get) => ({
    products: [],

    setProduct: (productsData) => {
        const productsNow = get().products;
        set({ products: [...productsNow, productsData] });
    },

    updateCountProduct: (id, count) => {
        const productsNow: ProductStoreData[] = get().products.map((product) => {
            if (product.id === id) {
                product.count = count;
            }
            return product;
        });
        set({products: [...productsNow]});
    },

    deleteProduct: (id) => {
        const productsNow = get().products.filter((product) => product.id !== id);
        set({products: [...productsNow]});
    }
}));
