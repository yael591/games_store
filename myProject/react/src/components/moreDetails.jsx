import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetAllreactGames } from "../axios/itemsaxios";
import "./style.css"; // אל תשכחי לכלול את ה-CSS
import mycont from "../mycontext";

export const MoreDetails = () => {
    const gam = useParams(); // מקבל את הgameId מתוך ה-URL
    const [list, setList] = useState([]); // רשימה של המשחקים
    const n = useNavigate(); // ניווט לדף הבית

    const yPurchase=useContext(mycont).yPurchase
    const etMyPurchase=useContext(mycont).etMyPurchase
    const totalPrice=useContext(mycont).totalPrice    
    const settotalPrice=useContext(mycont).settotalPrice
    const [updatedList, setUpdatedList] = useState([]);

    const doSomething = async () => {

     
        if (list.length == 0) {
          

            let y = (await GetAllreactGames()).data;
            setList(y)
            const newUpdatedList = y.map((element) => ({
              ...element,
              stockQuantity: 0,
          }));
          setUpdatedList(newUpdatedList)
        }
    }

  
   
    useEffect(() => {
        doSomething()
    },
        [])



        
   
      const f2=(h)=>{
        let j=updatedList.find((x)=>x.gameId===h.gameId)
     
        let find=0
        yPurchase.forEach(element => {
         if(element.gameId==h.gameId){
          element.stockQuantity=element.stockQuantity+1
             find=1
         }
      });
      if(find==0){
        j.stockQuantity=j.stockQuantity+1
          etMyPurchase([...yPurchase,j])
      }
      let newTotalPrice = 0;
      const updatedPurchase = find === 1 ? yPurchase : [...yPurchase, { ...h, stockQuantity: 1 }];
      updatedPurchase.forEach((item) => {
          newTotalPrice += item.price * item.stockQuantity;
      });
          settotalPrice(newTotalPrice)
      }

    const goHome = () => {
        n("/home"); 
    };

    



    return (
        <div className="overlay">
     
            {list.map((x, i) => {
                return x.gameId === parseInt(gam.gameId) ? (
                    <div className="modal-content" key={i}>
                        <h1>{x.gameName}</h1>
                        <div className="image-container">
                        <img src={`https://localhost:7007/${x.image}`} width={"100px"} style={{align:"center"}} alt={x.gameName} ></img>
                        </div>
                        <p>קטגוריה: {x.categoryId}</p>
                        <p>מחיר: {x.price}</p>
                        <p>כמות במלאי: {x.stockQuantity}</p>
                        <button onClick={() => f2(x)}>הוסף לסל</button>
                        <button onClick={goHome}>לחזרה לעמוד הבית</button>
                    </div>
                ) : null;
            })}
        </div>
    );
};
