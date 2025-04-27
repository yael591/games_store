import { useState } from "react"
import { addCategory } from "../axios/categoryaxios"
import { useLocation, useNavigate } from "react-router-dom";

export const AddCategory=()=>{

  const navigate = useNavigate();
  const location = useLocation();
    const [obj,setobj]=useState({

      
      "categoryId": 0,
      "categoryName": ""
      })
  ///פעולה שתפעיל את הפונקציה שמוסיפה לשרת
  const f1=async()=>{
      let y=await addCategory(obj)
  if(y.data){
    alert("הקטגוריה נוספה בהצלחה!")
    const previousPath = location.pathname; // אחסון נתיב נוכחי

    navigate('/');// נווט לדף הבית

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
      <div className="d-flex flex-column align-items-center">
        <input
          type={'text'}
          className="form-control mb-3"
          placeholder="שם קטגוריה"
          onBlur={(e) => setobj({ ...obj, categoryName: e.target.value })}
          style={{ backgroundColor: '#ffffff', borderColor: '#ff6f61' }} 
        />
        <input  type={'button'}  className="btn btn-primary"  onClick={() => f1()}  value="שמור"
         style={{
          backgroundColor: '#ff6f61',
          borderColor: '#ff6f61',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        />
      </div>
    </div>
  );
}