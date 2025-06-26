import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import React, {FC} from "react";
import {CardProductProps} from "@/entites/Cards/interface/interface";
import Image from 'next/image'

const CardProduct: FC<CardProductProps> = ({id, price, title, image_url, description}) => {
    return (
        <React.Fragment key={id}>
            <Card>
                <CardHeader>
                    <Image
                        src={image_url}
                        alt='image_product'
                    />
                </CardHeader>
                <CardContent>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{price}</p>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </React.Fragment>
    );
};

export default CardProduct;