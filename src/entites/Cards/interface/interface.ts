import {ProductData} from "@/widgets/Lists/interface/interface";

export interface CardReviewProps {
    id: number
    title: string
    content: string
}

export interface CardProductProps  extends ProductData {}