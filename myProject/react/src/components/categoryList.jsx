import { useEffect, useState } from "react";
import { DeleteCategory, GetAllCategories } from "../axios/categoryaxios";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



export const CategoryList=()=>{

    const navigat = useNavigate();
    const location = useLocation();
    const doSomething = async () => {    
        if (list.length === 0) {
  
            let y = (await GetAllCategories()).data;
            setlist(y)

        }
    }

    const [list, setlist] = useState([])
    
    useEffect(() => {
        doSomething()
    },
        [])
        const navigate=useNavigate()
    const f1=()=>{
      navigate(`../CategoryList/addCategory`)
    }
    const f2=(id)=>{
        navigate(`../CategoryList/toUpdateCategory/${id}`)       
    }
    const f3 = async(id)=>{
        let y=await DeleteCategory(id)
        
    if(y){
      alert(`קטגוריה מספר ${id} נמחקה בהצלחה!`)
      const previousPath = location.pathname; // אחסון נתיב נוכחי

    navigat('/');// נווט לדף הבית

    //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
    setTimeout(() => { // אופציונלי לרענן את הדף
        // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

        navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
    }, 50);
    }
    else{
      alert("נכשלת")
    }
    }

   return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead style={{ backgroundColor: "#ff4081", color: "white" }}>
                    <tr>
                        <th>מחיקת קטגוריה</th>
                        <th>עדכון קטגוריה</th>
                        <th>שם קטגוריה</th>
                        <th>קוד קטגוריה</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((h) => (
                        <tr key={h.categoryId} style={{ backgroundColor: "#f5e3e8" }}>
                            <td>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: "#ff4081",
                                        borderColor: "#ff4081",
                                        color: "white",
                                    }}
                                    onClick={() => f3(h.categoryId)}
                                >
                                    🗑️
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: "#ff9800",
                                        borderColor: "#ff9800",
                                        color: "white",
                                    }}
                                    onClick={() => f2(h.categoryId)}
                                >
                                    📝
                                </button>
                            </td>
                            <td>{h.categoryName}</td>
                            <td>{h.categoryId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center">
                <button
                    className="btn"
                    style={{
                        backgroundColor: "#4caf50",
                        borderColor: "#4caf50",
                        color: "white",
                    }}
                    onClick={f1}
                >
                    הוספת קטגוריה
                </button>
            </div>
            <Outlet />
        </div>
    );
}