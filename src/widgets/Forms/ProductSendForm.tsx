"use client"

import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {sendProduct} from "@/app/api/sendProduct";
import {useProductStore} from "@/widgets/Lists/store/storeProduct";
import {CardProductSend} from "@/app/api/interface/interface";
import React, {useState} from "react";
import {formatPhone} from "@/widgets/Forms/functions/formatPhone";
import {backetSchema} from "@/widgets/Forms/schemas/basketShema";
import {ProductSendFormProps} from "@/widgets/Forms/type/type";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import DialogBasket from "@/widgets/Dialogs/DialogBasket";


const ProductSendForm = () => {

    const products = useProductStore(state => state.products);
    const [value, setValue] = useState("");
    const [response, setResponse] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ProductSendFormProps>({
        resolver: zodResolver(backetSchema),
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatPhone(input);
        setValue(formatted);
    };

    const onSubmitForm = async (values: ProductSendFormProps) => {
        let productSend: CardProductSend[] = products.map(({id, count}) => ({id, quantity: count}))
        const phone = values.tel.replace(/\s+/g, '').slice(1, 12)
        const response = await sendProduct({phone, cart: productSend})
        setResponse(response)
        console.log(response)
        setValue('');
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmitForm)}
            className='w-full bg-zinc-900 flex flex-col gap-4 p-4 rounded-xl'
        >
            <label className='text-white text-2xl' htmlFor="tel">Введите телефон</label>
            <input
                type="tel"
                className={`p-2 rounded-[8px] placeholder:text-white ${errors.tel ? '!text-red-500 border-2 !border-red-500' : 'text-white border-2 border-white'}`}
                placeholder="+7 999 999 99 99"
                value={value}
                maxLength={18}
                {...register("tel")}
                onChange={handleChange}
            />

            <Dialog>
                <DialogTrigger asChild>
                    <button disabled={value.length < 16} className='text-zinc-900 bg-white p-2 rounded-[8px]'>
                        Отправить информацию
                    </button>
                </DialogTrigger>
                {/*{*/}
                {/*    response.*/}
                {/*}*/}
                <DialogBasket/>
            </Dialog>
        </form>
    );
};

export default ProductSendForm;