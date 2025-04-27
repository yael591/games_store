import axios from "axios";

const url="https://localhost:7007/api/Shoppings/"

export const getShopping=()=>{
    return axios.get(`${url}getAllTheShopping`)
}


export const newShopping=(obj)=>{
    return axios.put(`${url}addShopping`,obj)
}

