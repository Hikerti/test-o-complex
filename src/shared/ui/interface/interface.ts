export interface ButtonBuyProps {
    setActive: (active: boolean) => void;
}
export interface ButtonProductProps {
    id: number
    count: number;
    setActive: (active: boolean) => void;
    setCount: (count: number) => void
}