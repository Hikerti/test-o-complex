import {FC} from "react";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CardReviewProps} from "@/entites/Cards/interface/interface";

const CardReview: FC<CardReviewProps> = async ({id, content, title}) => {
    return (
        <Card key={id} className='bg-zinc-200'>
            <CardHeader className='flex flex-col items-start gap-4 lg:flex-row lg:items-center'>
                <CardTitle>Отзыв {id}</CardTitle>
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {content}{content.length > 100 && '...'}
                </p>
            </CardContent>
        </Card>
    );
};

export default CardReview;