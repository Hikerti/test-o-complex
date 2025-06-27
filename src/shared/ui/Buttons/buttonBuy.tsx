import React, {FC} from "react"
import {ButtonBuyProps} from "@/shared/ui/interface/interface";

const ButtonBuy: FC<ButtonBuyProps> = ({setActive}) => {
    return (
        <button
            className='w-full h-full bg-zinc-900 p-4 text-white rounded-xl hover:bg-zinc-800'
            onClick={() => setActive(false)}
        >
            Купить
        </button>
    );
};

export default ButtonBuy;