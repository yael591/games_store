import { useContext, useEffect, useState } from "react"
import mycont from "../mycontext"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { getAllCustomers, ifCustomerInTheDB } from "../axios/custumeraxios"
import {  addShopingsDetails} from "../axios/detailShoppingsaxios"
import { newShopping } from "../axios/shoppingaxios"
import { toUpdatequantity } from "../axios/itemsaxios"

export const ShoppingBasket=()=>{
     const navigate=useNavigate()
     const yPurchase=useContext(mycont).yPurchase
     const setPurchase=useContext(mycont).etMyPurchase
    const totalPrice=useContext(mycont).totalPrice    
    const settotalPrice=useContext(mycont).settotalPrice
    const curentu=useContext(mycont).corentUser
    const setListCust=useContext(mycont).setlistcust
    const listCust=useContext(mycont).listCust
    let setpass = useContext(mycont).setpass
    let pass = useContext(mycont).pass  
    const [newSal,setNewSal]=useState()
  


    const f3=(id)=>{
        
        let y= addShopingsDetails(id,yPurchase)
        if(y)
        alert("הקניה נוספה להסטורית קניותיך בהצלחה!")
        else
        alert("ישנה תקלה נסה שוב")

    }






   // פונקציה f1 עם קריאה ל-API
const f1 = async (updatedObj) => {
   
        const response = await newShopping(updatedObj);
        if (response.data) {
            const shopping = response.data;
            alert("הקנייה התקבלה בהצלחה ונשמרה באזור האישי שלך תודה שקנית אצלינו😊");
            f3(shopping);  // עדכון פרטי הקנייה
            setPurchase([])
            settotalPrice(0)
    }
};







    const updateTotalPrice = (updatedPurchase) => {
      let totalPric = 0;
      updatedPurchase.forEach((element) => {
          totalPric += element.price * element.stockQuantity;
      });
      settotalPrice(totalPric); // עדכון המחיר הכולל
  };

  const addQuantity = (gameId) => {
    setPurchase((yPurchase) => {
        const updatedPurchase = yPurchase.map((game) =>
            game.gameId === gameId
                ? { ...game, stockQuantity: game.stockQuantity + 1 }
                : game
        );
        updateTotalPrice(updatedPurchase); // חישוב המחיר החדש
        return updatedPurchase;
    });
};
    
      // פונקציה להורדת כמות
      const removeQuantity = (gameId) => {
        setPurchase((yPurchase) => {
            const updatedPurchase = yPurchase.map((game) => {
                // אם הכמות היא 1, נוריד את המוצר לחלוטין
                if (game.gameId === gameId && game.stockQuantity === 1) {
                    return null; // המוצר לא ייכלל בעדכון
                }
                // אם הכמות גדולה מ-1, נוריד 1
                if (game.gameId === gameId && game.stockQuantity > 1) {
                    return { ...game, stockQuantity: game.stockQuantity - 1 };
                }
                // אם לא, לא עושים שינוי
                return game;
            }).filter(game => game !== null); // מסננים את המוצרים שהוסרו
    
            // חישוב המחיר החדש לאחר העדכון
            updateTotalPrice(updatedPurchase);
            return updatedPurchase;
        });
    };
     
    const doSomething = async () => {

    
      if (list.length == 0) {
        

          let y = (await getAllCustomers()).data;
         
          setlist(y)
          setListCust(y)
           
      }
  }

  useEffect(() => {
    doSomething()
},
    [])




  const [list, setlist] = useState([])

  const [obj,setObj]=useState({customerID:0,totalAmount:0})

  const toFinishMyBuing = async () => {
    let y=await ifCustomerInTheDB(curentu,pass)
    if(!y) {
        alert("פרטיך אינם רשומים במערכת עליך להרשם תחילה");
        navigate("/registration");
    } else {
        let CustId;
        // מציאת ה-customerID
        list.forEach((element) => {
            if (element.custName === curentu) {
                CustId = element.custId;
            }
        });

        // עדכון המידע שנשלח
        const updatedObj = { ...obj, customerID: CustId, totalAmount: totalPrice };

        // שליחה לפונקציה שמבצעת את הקנייה רק אחרי עדכון ה-state
        setObj(updatedObj);  // עדכון state כאן
        await f1(updatedObj);  // לאחר מכן שליחה לשרת
    }
};



















return(
<div className="container mt-3">
<table className="table table-bordered table-hover" style={{ backgroundColor: "#f9f9f9" }}>
  <thead style={{ backgroundColor: "#f8c6c9", color: "#721c24", fontWeight: "bold" }}>
    <tr>
      <th>פעולות</th>
      <th>מחיר סופי</th>
      <th>כמות</th>
      <th>מחיר</th>
      <th>שם</th>
    </tr>
  </thead>
  <tbody>
    {yPurchase.map((x, i) => (
      <tr key={i} style={{ backgroundColor: "#fff" }}>
        <td>
          <button
            className="btn btn-success btn-sm mx-1"
            onClick={() => addQuantity(x.gameId)}
            style={{ backgroundColor: "#ff6f61", borderColor: "#ff6f61", color: "white" }}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm mx-1"
            onClick={() => removeQuantity(x.gameId)}
            style={{ backgroundColor: "#ff6f61", borderColor: "#ff6f61", color: "white" }}
          >
            -
          </button>
        </td>
        <td>₪ {x.stockQuantity * x.price} </td>
        <td>{x.stockQuantity}</td>
        <td>₪ {x.price} </td>
        <td>{x.gameName}</td>
      </tr>
    ))}
  </tbody>
</table>
<div className="mt-3">
  <h1 style={{ color: "#721c24" }}>
  ₪ סכום כולל לקנייתך: <strong> {totalPrice} </strong>
  </h1>
  <button
    className="btn btn-primary mt-3"
    onClick={() => toFinishMyBuing()}
    style={{
      backgroundColor: "#f8c6c9",
      borderColor: "#f8c6c9",
      color: "#721c24",
      fontWeight: "bold",
    }}
  >
    לסיום הקנייה שלי
  </button>
</div>
</div>
         )}