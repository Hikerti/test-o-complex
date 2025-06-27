import {sendProductType} from "@/app/api/interface/interface";

export const sendProduct = async (orderData: sendProductType) => {
    const response = await fetch("http://o-complex.com:1337/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    });

    const data = await response.json();
    return data;
};