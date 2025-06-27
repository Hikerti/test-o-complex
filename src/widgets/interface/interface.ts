import {ProductStoreData} from "@/widgets/Lists/interface/interface";

export interface useSetProductProps extends ProductStoreData {
    active: boolean;
    setActive: (active: boolean) => void;
    count: number;
}