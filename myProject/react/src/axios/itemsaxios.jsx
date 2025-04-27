import axios from "axios"

const url="https://localhost:7007/api/Game/"

//שליפת משחקים לפי קטגוריה
export const GetAllAccordingToCategory=(id)=>{
    return axios.get(`${url}AllGamesAccordingCategory/${id}`)
}
//שליפת אוביקטים של כל המוצרים
export const GetAllreactGames=()=>{
return axios.get(`${url}AllGames`)
}
//שליפת משחק לי קוד משחק
export const GetGameId=(id)=>{
    return axios.get(`${url}OneGame/${id}`)
    }
//הוספה 
export const addGame=(obj)=>{
    return axios.put(`${url}AddGame`,obj)
}

//עידכון
export const edit=(id,obj)=>{
return axios.post(`${url}update/${id}`,obj)
}

//מחיקה
export const dell=(id)=>{
 return axios.delete(`${url}DeleteGame/${id}`)
 }

 export const toUpdatequantity=(obj)=>{
    return axios.post(`${url}toUpdadeQTY`,obj)
    }