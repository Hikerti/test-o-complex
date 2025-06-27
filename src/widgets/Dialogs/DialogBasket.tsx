import {DialogContent, DialogTitle} from "@/components/ui/dialog"
import {BadgeCheck} from "lucide-react";

const DialogBasket = () => {
    return (
        <DialogContent className='flex items-center justify-center'>
            <DialogTitle className='text-green-500 text-2xl'>Заказ отправлен</DialogTitle>
            <BadgeCheck className='text-green-500 w-[400px] h-[400px]'/>
        </DialogContent>
    );
};

export default DialogBasket;