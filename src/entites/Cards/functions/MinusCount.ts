import {IncrementAndMinusCount} from "@/entites/Cards/interface/interface";

export const MinusCount = ({setCount, action, count}: IncrementAndMinusCount) => {
    if (action == 'minus') {
        if (count > 1) {
            setCount(count - 1)
        } else {
            setCount(count)
        }
    }
}