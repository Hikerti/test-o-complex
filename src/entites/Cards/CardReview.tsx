import {FC} from "react";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CardReviewProps} from "@/entites/Cards/interface/interface";

const CardReview: FC<CardReviewProps> = async ({id, content, title}) => {
    return (
        <React.Fragment key={id}>
            <Card className=''>
                <CardHeader className='flex items-center gap-4'>
                    <CardTitle>Отзыв {id}</CardTitle>
                    <CardDescription>{title}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        {content}{content.length > 100 && '...'}
                    </p>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default CardReview;