import { useState } from "react"
import { edit } from "../axios/categoryaxios"
import { useParams } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom';

export const ToUpdateCategory=()=>{
  const navigate = useNavigate();
    const location = useLocation();

    const p=useParams()
    const [obj,setobj]=useState({
        "categoryId":p.id,
        "categoryName": "",
      })

  const f1=()=>{
      let y=edit(obj.categoryId,obj)
  if(y){
    alert(`קטגוריה מספר ${obj.categoryId} התעדכן בהצלחה!`)
    const previousPath = location.pathname; // אחסון נתיב נוכחי

    navigate('/');// נווט לדף הבית

    //לאחר עיכוב שצוין, הוא מנווט בחזרה לנתיב השמור המקורי
    setTimeout(() => { // אופציונלי לרענן את הדף
        // window.history.back(); // זה יחזיר את המשתמש לדף הקודם

        navigate(previousPath); // נווט חזרה לנתיב הקודם לאחר עיכוב(50)
    }, 50);
  }
  else{
    alert("ישנה תקלה נסה שוב")
  }
  }
  return (
    <div className="container mt-3">
      <form>
        <label className="form-label" style={{ color: '#ff6f61', fontSize: '1.2em' }}>
          עדכון קטגוריה מספר: {p.id}
        </label>
  
        <div className="mb-3 mt-3">
          <input
            type={'text'}
            className="form-control"
            placeholder="שם הקטגוריה"
            onBlur={(e) => setobj({ ...obj, categoryName: e.target.value })}
            style={{ backgroundColor: '#f8e1e1', borderColor: '#ff6f61' }}
          />
        </div>
  
        <div className="mb-3 mt-3 text-center">
          <input
            type={'button'}
            className="btn btn-primary"
            onClick={() => f1()}
            value="עדכן"
            style={{ backgroundColor: '#ff6f61', borderColor: '#ff6f61' }}
          />
        </div>
      </form>
    </div>
  );
  
}