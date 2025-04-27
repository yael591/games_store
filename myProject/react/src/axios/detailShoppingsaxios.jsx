import axios from "axios";

const url="https://localhost:7007/api/DetailsShopping/"


export const getShoppingDetails=()=>{
    return axios.get(`${url}GetShoppingDetails`)
}


export const addShopingsDetails=(id,obj)=>{
    return axios.put(`${url}addShoppings/${id}`,obj)
}