export interface CardProductSend {
    id: number;
    quantity: number
}

export interface sendProductType {
    phone: string
    cart: CardProductSend[]
}