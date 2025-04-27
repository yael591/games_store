import { useState } from "react"
import { addCustomer } from "../axios/custumeraxios"
import { useLocation, useNavigate } from 'react-router-dom';
export const Registration=()=>{
    const [cust,setCust]=useState({})
    const navigate = useNavigate();
    const location = useLocation();


    const f1=async()=>{
        let y=await addCustomer(cust)
    if(y.data){
      alert(`${cust.custName} נוספת בהצלחה למערכת `)
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
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card" style={{ width: "400px", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <div className="card-body" style={{ textAlign: "center" }}>
            <h1 className="text-primary mb-4">הרשמה למערכת</h1>
            
            <div className="mb-3">
              <input
                type={'text'}
                placeholder="הכנס שם מלא"
                className="form-control"
                onBlur={(e) => setCust({ ...cust, custName: e.target.value })}
                style={{ backgroundColor: '#f8f8f8', borderColor: '#ff6f61' }}
              />
            </div>
            
            <div className="mb-3">
              <input
                type={'password'}
                placeholder="הכנס סיסמא"
                className="form-control"
                onBlur={(e) => setCust({ ...cust, custpass: e.target.value })}
                style={{ backgroundColor: '#f8f8f8', borderColor: '#ff6f61' }}
              />
            </div>
            
            <div className="mb-3">
              <input
                type={'text'}
                placeholder="הכנס פרטי אשראי"
                className="form-control"
                onBlur={(e) => setCust({ ...cust, custCreditDetails: e.target.value })}
                style={{ backgroundColor: '#f8f8f8', borderColor: '#ff6f61' }}
              />
            </div>
    
            <button
              onClick={f1}
              className="btn btn-success w-100"
              style={{ backgroundColor: '#ff6f61', color: 'white' }}
            >
              שמור את פרטי במערכת
            </button>
          </div>
        </div>
      </div>
    );
    }    