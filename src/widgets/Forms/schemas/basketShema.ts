import {z} from "zod";

export const backetSchema = z.object({
    tel: z.string().min(12, 'Вы не полностью заполнили телефон')
})
