import axios from "axios";
const url="https://localhost:7007/api/Category/"

export const GetAllCategories=()=>{
    return axios.get(`${url}AllCategories`)
}
//שליפת קטגוריות 
export const GetCategory=(id)=>{
return axios.get(`${url}OneCategory/${id}`)
}
//מחיקת קטגוריה לפי קוד קטגוריה
export const DeleteCategory=(id)=>{
    return axios.delete(`${url}DeleteCategory/${id}`)
    }
//הוספה 
export const addCategory=(obj)=>{
    return axios.put(`${url}AddCategory`,obj)
}

//עידכון
export const edit=(id,obj)=>{
return axios.post(`${url}update/${id}`,obj)
}

