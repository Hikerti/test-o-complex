"use client"

import React, {FC, useState} from 'react';
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import ButtonProduct from "@/shared/ui/Buttons/buttonProduct";
import useSetProduct from "@/widgets/hooks/useSetProduct";
import {CardBasketProductProps} from "@/entites/Cards/interface/interface";

const CardBasketProduct: FC<CardBasketProductProps> = ({id, price, title, image_url, description, count}) => {
    const [active, setActive] = useState<boolean>(true);
    const [countNow, setCountNow] = useState(count);
    console.log(countNow)

    useSetProduct({id, active, count: countNow, title, image_url, description, price, setActive});

    return (
        <Card key={id} className='bg-zinc-200 flex flex-col justify-between h-[400px]'>
            <div className='flex'>
                <CardHeader className='w-[400px]'>
                    <img
                        src={image_url}
                        alt='image_product'
                        width={400}
                        height={'100%'}
                    />
                </CardHeader>
                <CardContent className='flex flex-col'>
                    <div>
                        <h3 className='text-zinc-900 text-[28px] font-bold'>{title}</h3>
                        <p>{description.slice(0, 200)}{description.length > 200 && "..."}</p>
                    </div>
                    <p className='text-zinc-900 text-xl font-bold'>Цена: {price}</p>
                </CardContent>
            </div>
            <CardFooter>
                <ButtonProduct
                    setCount={setCountNow}
                    count={countNow}
                    id={id}
                    setActive={setActive}
                />
            </CardFooter>
        </Card>
    );
};

export default CardBasketProduct;