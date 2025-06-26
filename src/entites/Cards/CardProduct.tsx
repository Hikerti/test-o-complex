"use client"

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React, {FC, useState} from "react";
import {CardProductProps} from "@/entites/Cards/interface/interface";
import {IncrementCount} from "@/entites/Cards/functions/IncrementCount";
import {MinusCount} from "@/entites/Cards/functions/MinusCount";

const CardProduct: FC<CardProductProps> = ({id, price, title, image_url, description}) => {

    const [active, setActive] = useState<boolean>(true);
    const [count, setCount] = useState(0);

    return (
            <Card key={id} className='bg-zinc-200'>
                <CardHeader>
                    <img
                        src={image_url}
                        alt='image_product'
                        width={'100%'}
                        height={200}
                    />
                </CardHeader>
                <CardContent className='h-[400px] flex flex-col justify-between'>
                    <div>
                        <h3 className='text-zinc-900 text-[28px] font-bold'>{title}</h3>
                        <p>{description.slice(0, 200)}{description.length > 200 && "..."}</p>
                    </div>
                    <p className='text-zinc-900 text-xl font-bold'>Цена: {price}</p>
                </CardContent>
                <CardFooter>
                    {
                        active
                            ?
                            (
                                <button
                                    className='w-full h-full bg-zinc-900 p-4 text-white rounded-xl hover:bg-zinc-800'
                                    onClick={() => setActive(false)}
                                >
                                    Купить
                                </button>
                            )
                            : (
                                <div className='w-full h-full flex gap-4 text-white'>
                                    <button
                                        className='bg-zinc-900 px-6 py-4 rounded-xl'
                                        onClick={() => {
                                            MinusCount({setCount, action: 'minus', count})
                                        }}
                                    >-</button>
                                    <button className='w-full bg-zinc-900 rounded-xl'>{count}</button>
                                    <button
                                        className='bg-zinc-900 px-6 py-4 rounded-xl'
                                        onClick={() => {
                                            IncrementCount({setCount, action: 'plus', count})
                                        }}
                                    >+</button>
                                </div>
                            )
                    }
                </CardFooter>
            </Card>
    );
};

export default CardProduct;