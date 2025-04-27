import { useEffect, useState } from "react"
import { edit } from "../axios/itemsaxios"
import { useParams } from "react-router-dom"
import { useLocation, useNavigate } from 'react-router-dom';
import { GetAllCategories } from "../axios/categoryaxios";


export const ToUpdateGame=()=>{
    const p=useParams()
    const navigate = useNavigate();
    const location = useLocation();


    const [obj,setobj]=useState({
        "gameId": p.id,
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


  const f1=()=>{
      let y=edit(p.id,obj)
  if(y){
    alert(`משחק מספר ${p.id} התעדכן בהצלחה!`)
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
    <div className="container mt-3">
      <form>
        <label className="form-label" style={{ color: '#ff6f61', fontSize: '1.2em' }}>
          עדכון משחק בעל קוד: {p.id}
        </label>
        
        <div className="mb-3 mt-3">
          <select
            className="form-select mt-3"
            onChange={(e) => setobj({ ...obj, categoryId: e.target.value })}
            style={{ backgroundColor: '#f8e1e1', borderColor: '#ff6f61' }}
          >
            {listCategories.map((x) => (
              <option key={x.categoryId} value={x.categoryId}>
                {x.categoryName}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-3 mt-3">
          <input
            type={'text'}
            className="form-control"
            placeholder="שם המשחק"
            onBlur={(e) => setobj({ ...obj, gameName: e.target.value })}
            style={{ backgroundColor: '#f8e1e1', borderColor: '#ff6f61' }}
          />
        </div>
        
        <div className="mb-3 mt-3">
          <input
            type={'text'}
            className="form-control"
            placeholder="תמונה"
            onBlur={(e) => setobj({ ...obj, image: e.target.value })}
            style={{ backgroundColor: '#f8e1e1', borderColor: '#ff6f61' }}
          />
        </div>
        
        <div className="mb-3 mt-3">
          <input
            type={'text'}
            className="form-control"
            placeholder="מחיר"
            onBlur={(e) => setobj({ ...obj, price: e.target.value })}
            style={{ backgroundColor: '#f8e1e1', borderColor: '#ff6f61' }}
          />
        </div>
        
        <div className="mb-3 mt-3">
          <input
            type={'text'}
            className="form-control"
            placeholder="כמות במלאי"
            onBlur={(e) => setobj({ ...obj, stockQuantity: e.target.value })}
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