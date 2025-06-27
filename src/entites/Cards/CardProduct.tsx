"use client"

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React, {FC, useState} from "react";
import {CardProductProps} from "@/entites/Cards/interface/interface";
import {ButtonBuy} from "@/shared";
import ButtonProduct from "@/shared/ui/Buttons/buttonProduct";
import useSetProduct from "@/widgets/hooks/useSetProduct";

const CardProduct: FC<CardProductProps> = ({id, price, title, image_url, description}) => {
    const [active, setActive] = useState<boolean>(true);
    const [count, setCount] = useState(1);

    useSetProduct({id, active, count, title, image_url, description, price, setActive});

    return (
            <Card key={id} className='w-[380px] bg-zinc-200'>
                <CardHeader>
                    <img
                        src={image_url}
                        alt='image_product'
                        className='bg-white'
                        width={330}
                        height={250}
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
                                <ButtonBuy
                                    setActive={setActive}
                                />
                            )
                            : (
                                <ButtonProduct
                                    setCount={setCount}
                                    count={count}
                                    id={id}
                                    setActive={setActive}
                                />
                            )
                    }
                </CardFooter>
            </Card>
    );
};

export default CardProduct;