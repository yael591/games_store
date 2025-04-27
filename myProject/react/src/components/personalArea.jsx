import { useContext, useEffect, useState } from "react";
import { getAllCustomers } from "../axios/custumeraxios";
import mycont from "../mycontext";
import { getShopping } from "../axios/shoppingaxios";
import { Outlet, useNavigate } from "react-router-dom";

export const MyShoppings=()=>{

    
    const curentu=useContext(mycont).corentUser
    const listcust=useContext(mycont).listCust
    const setlistcust=useContext(mycont).setlistcust
    const isCust=useContext(mycont).isCust
    const setisCust=useContext(mycont).setisCust
  
    
     const n=useNavigate()

    const doSomething = async () => {

        if (list.length == 0) {  
            let y = (await getShopping()).data;
            
            setlist(y)
            
            let l1 = listcust.find(x => x.custName === curentu);
            if (l1!=null) {
                setlistcust(l1);
                const filteredList = y.filter((x) => x.customerId === l1.custId);
                if(filteredList!=null){
                setlist(filteredList);
                setisCust(true)
                }
                else{
                setisCust(false)
                }
            }
         
          
        }
    }
    const [list, setlist] = useState([])
    useEffect(() => {
      doSomething()
  },
      [[curentu,listcust],[]])

   const f9=(id)=>{
       n(`shoppingDetails/${id}`)
       
   }    


      
   


    
   return (
    <div className="container mt-3">
      {isCust && (
        <table className="table table-striped" style={{ backgroundColor: "#f9f1f3" }}>
          <thead style={{ backgroundColor: "#ff6f61", color: "#fff" }}>
            <tr>
              <th>פרטי קנייה זו</th>
              <th>סכום סופי</th>
              <th>תאריך קנייה</th>
              <th>קוד הלקוח</th>
              <th>קוד קנייה</th>
            </tr>
          </thead>
          <tbody>
            {list.map((x, i) => (
              <tr key={i} style={{ backgroundColor: "#f0e0e8" }}>
                <td><button className="btn btn-outline-primary" onClick={() => f9(x.shoppingId)}>לפרטי קניה זו</button></td>
                <td>{x.totalAmount}</td>
                <td>{x.shppingDate}</td>
                <td>{x.customerId}</td>
                <td>{x.shoppingId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  
      {!isCust && (
        <h1 style={{ color: "#ff6f61", textAlign: "center" }}>סל הקניות שלך ריק, עוד לא בצעת קניות באתר</h1>
      )}
  
      <Outlet />
    </div>
  );
}