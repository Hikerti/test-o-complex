import {ProductData} from "@/widgets/Lists/interface/interface";

export interface CardReviewProps {
    id: number
    title: string
    content: string
}

export interface IncrementAndMinusCount {
    count: number
    setCount: (count: number) => void
    action: 'plus' | 'minus'
}

export interface CardProductProps extends ProductData {}
export interface CardBasketProductProps extends ProductData {
    count: number
}