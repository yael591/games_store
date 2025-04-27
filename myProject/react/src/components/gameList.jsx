import { useEffect } from "react"
import { useState } from "react"
import { GetAllreactGames, dell } from "../axios/itemsaxios"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export const GameList=()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const doSomething = async () => {
        if (list.length == 0) {

            let y = (await GetAllreactGames()).data;
            setlist(y)

        }
    }

    const [list, setlist] = useState([])
  
    useEffect(() => {
        doSomething()
    },
        [])

    const nav=useNavigate()    
    const f1=()=>{
        nav("/GameList/add")
    }

    const f2=(id)=>{
        nav(`../GameList/toUpdateGate/${id}`)
    }

    const f3 = async(id)=>{
        let y=await dell(id)
        
    if(y){
      alert(`משחק מספר ${id} נמחק בהצלחה!`)
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
                <table className="table table-bordered table-striped">
                    <thead style={{ backgroundColor: "#ff4081", color: "white" }}>
                        <tr>
                            <th>מחיקת משחק</th>
                            <th>עדכון משחק</th>
                            <th>כמות במלאי</th>
                            <th>מחיר משחק</th>
                            <th>שם משחק</th>
                            <th>קוד משחק</th>
                            <th>תמונת משחק</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((h) => (
                            <tr key={h.gameId} style={{ backgroundColor: "#f5e3e8" }}>
                                <td>
                                    <button 
                                        className="btn" 
                                        style={{ backgroundColor: "#ff4081", borderColor: "#ff4081", color: "white" }} 
                                        onClick={() => f3(h.gameId)}>
                                        🗑️
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        className="btn" 
                                        style={{ backgroundColor: "#ff9800", borderColor: "#ff9800", color: "white" }} 
                                        onClick={() => f2(h.gameId)}>
                                        📝
                                    </button>
                                </td>
                                <td>{h.stockQuantity}</td>
                                <td style={{ color: "#4caf50" }}>₪{h.price}</td>
                                <td>{h.gameName}</td>
                                <td>{h.gameId}</td>
                                <td>
                                    <img width={"50px"} src={`https://localhost:7007/${h.image}`} alt={h.gameName} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    
                <div className="text-center">
                    <button 
                        className="btn" 
                        style={{ backgroundColor: "#4caf50", borderColor: "#4caf50", color: "white" }} 
                        onClick={f1}>
                        הוספת משחק
                    </button>
                </div>
    
                <Outlet />
            </div>
        );
    }