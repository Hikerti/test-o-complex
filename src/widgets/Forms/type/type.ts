import {z} from "zod";
import {backetSchema} from "@/widgets/Forms/schemas/basketShema";

export type ProductSendFormProps = z.infer<typeof backetSchema>