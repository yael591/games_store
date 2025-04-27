import { useEffect, useState } from "react"
import { addGame } from "../axios/itemsaxios"
import { useLocation, useNavigate } from "react-router-dom";
import { GetAllCategories } from "../axios/categoryaxios";

export const AddGame=()=>{
     
  const navigate = useNavigate();
  const location = useLocation();
    const [obj,setobj]=useState({
        "gameId": 0,
        "gameName": "",
        "categoryId": 0,
        "nameCategory": "",
        "price": 0,
        "image": "",
        "stockQuantity": 0
      })
      const doSomething = async () => {
        if (listCategories.length == 0) {
            let y = ((await GetAllCategories()).data)
            setListCategories(y)
           
        }
    }
    const [listCategories, setListCategories] = useState([])
    useEffect(() => {
        doSomething()
    }, [])






  ///פעולה שתפעיל את הפונקציה שמוסיפה לשרת
  const f1=async()=>{
      let y=await addGame(obj)
  if(y.data){
    alert("המשחק נוסף בהצלחה!")
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
        placeholder="שם משחק"
        onBlur={(e) => setobj({ ...obj, gameName: e.target.value })}
        style={{ backgroundColor: '#ffffff', borderColor: '#ff6f61' }} // לבן עם גבול ורוד
      />

     
        <select
          className="form-select mb-3" // הוספתי את קלאס mb-3 כדי לשמור על אותו מרווח כמו בשאר השדות
          onChange={(e) => setobj({ ...obj, categoryId: e.target.value })}
          style={{
            backgroundColor: '#ffffff',
            borderColor: '#ff6f61',
            width: '100%', // להבטיח שהסלקט יהיה באותו גודל כמו השדות האחרים
            // padding: '10px', // הוספת padding כדי להתאים לגודל השדות
            // boxSizing: 'border-box', // חשוב כדי שהpadding לא ישפיע על הרוחב
          }}
        >
          {listCategories.map((x) => (
            <option key={x.categoryId} value={x.categoryId}>
              {x.categoryName}
            </option>
          ))}
        </select>
      
   
      <input
        type={'text'}
        className="form-control mb-3"
        placeholder="מחיר"
        onBlur={(e) => setobj({ ...obj, price: e.target.value })}
        style={{ backgroundColor: '#ffffff', borderColor: '#ff6f61' }} // לבן עם גבול ורוד
      />

      <input
        type={'text'}
        className="form-control mb-3"
        placeholder="תמונה"
        onBlur={(e) => setobj({ ...obj, image: e.target.value })}
        style={{ backgroundColor: '#ffffff', borderColor: '#ff6f61' }} // לבן עם גבול ורוד
      />
  

      <input
        type={'text'}
        className="form-control mb-3"
        placeholder="כמות במלאי"
        onBlur={(e) => setobj({ ...obj, stockQuantity: e.target.value })}
        style={{ backgroundColor: '#ffffff', borderColor: '#ff6f61' }} // לבן עם גבול ורוד
      />
  
      <input
        type={'button'}
        className="btn btn-danger"
        onClick={() => f1()}
        value="שמור"
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
  </div>)


      



      }