import { useContext, useEffect } from "react"
import { useState } from "react"
import { GetAllreactGames } from "../axios/itemsaxios"
import { useSelector } from "react-redux"
import { MoreDetails } from "./moreDetails"
import { Link, Outlet, useNavigate,useParams } from "react-router-dom"
import mycont from "../mycontext"

export const Home = () => {
    const navigate=useNavigate()
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [is,setIs]=useState(false)
    const yPurchase=useContext(mycont).yPurchase
    const etMyPurchase=useContext(mycont).etMyPurchase
    const totalPrice=useContext(mycont).totalPrice    
    const settotalPrice=useContext(mycont).settotalPrice
    const [updatedList, setUpdatedList] = useState([]);

    const doSomething = async () => {
        if (list.length == 0) {
            let y = (await GetAllreactGames()).data;
            setlist(y)
            const newUpdatedList = y.map((element) => ({
              ...element,
              stockQuantity: 0,
          }));
          setUpdatedList(newUpdatedList)
        }
    }

    const [list, setlist] = useState([])
    // בעת טעינת הקומפוננטה
    useEffect(() => {
        doSomething()
    },
        [])



        const handleMoreDetails = (gameId) => {
            navigate(`/home/MoreDetails/${gameId}`);
        }
   
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




return (
  <div className="container mt-4">
    <div className="row">
      {list.map((product) => (
        <div className="col-md-4 col-sm-6 mb-4" key={product.gameId}>
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4" style={{ backgroundColor: "#f8f1f1" }}>
              <h5 className="card-title text-uppercase font-weight-bold" style={{ color: "#ff4081" }}>
                קוד: {product.gameId}
              </h5>
              <p className="card-text" style={{ color: "#212121" }}>
                <strong>שם המוצר:</strong> {product.gameName}
              </p>
              <p className="card-text" style={{ color: "#4caf50" }}>
                <strong>מחיר:</strong> ₪{product.price}
              </p>
              <button
                className="btn btn-danger me-2"
                onClick={() => handleMoreDetails(product.gameId)}
              >
                פרטים נוספים
              </button>
              <button
                className="btn btn-primary"
                onClick={() => f2(product)}
              >
                🛒 הוסף לסל
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Outlet></Outlet>
  </div>
);
};
