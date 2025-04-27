import axios from "axios"

const url="https://localhost:7007/api/Customer/"
export const addCustomer=(obj)=>{
    return axios.put(`${url}addCustomer`,obj)
}

export const ifCustomerInTheDB=(name,pass)=>{
    return axios.post(`${url}getIfCustHere/${name}/${pass}`)
}

export const getAllCustomers=()=>{
    return axios.get(`${url}toGetAllCustomer`)
}