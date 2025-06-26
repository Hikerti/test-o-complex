import {IncrementAndMinusCount} from "@/entites/Cards/interface/interface";

export const IncrementCount = ({setCount, action, count}: IncrementAndMinusCount) => {
    if (action == 'plus') {
        if (count < 100) {
            setCount(count + 1)
        } else {
            setCount(count)
        }
    }
}