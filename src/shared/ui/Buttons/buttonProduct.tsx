import React, {FC} from 'react';
import {MinusCount} from "@/entites/Cards/functions/MinusCount";
import {IncrementCount} from "@/entites/Cards/functions/IncrementCount";
import {ButtonProductProps} from "@/shared/ui/interface/interface";
import {Trash2} from "lucide-react";
import {useProductStore} from "@/widgets/Lists/store/storeProduct";

const ButtonProduct: FC<ButtonProductProps> = ({setCount, count, id, setActive}) => {
    const deleteProduct = useProductStore(state => state.deleteProduct);

    return (
        <div className='w-full h-full flex gap-4 text-white'>
            <button
                className='bg-zinc-900 px-6 py-4 rounded-xl'
                onClick={() => {
                    MinusCount({setCount, action: 'minus', count})
                }}
            >-</button>
            <button className='w-full bg-zinc-900 rounded-xl'>{count}</button>
            <button
                className='bg-red-500 px-4 py-4 rounded-xl'
                onClick={() => {
                    deleteProduct(id)
                    setActive(true)
                }}
            >
                <Trash2 />
            </button>
            <button
                className='bg-zinc-900 px-6 py-4 rounded-xl'
                onClick={() => {
                    IncrementCount({setCount, action: 'plus', count})
                }}
            >+</button>
        </div>
    );
};

export default ButtonProduct;