import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink} from "react-router-dom"
import { Menue } from './components/menu';
import { MyRouting } from './components/myrouting';
import { Login } from './components/login';
import { useState } from 'react';
import { Myprovider } from './mycontext';



function App() {

const [isMen,setisMa]=useState(false)
const [totalPrice,settprice]=useState(0)
//שם המשתמש
const [curentu,setcurentu]=useState("לא מחובר")
//הסל שלי
const [myPurchase,setMyPurchase]=useState([
])

const [listCust, setlistcust] = useState([])
//הקניות שלי
const [myShoppings,setMyShoppings]=useState([])
const [pass,setpass]=useState("")
const [isCust,setisCust]=useState(false)
//פרוט הקניות שלי
const store={
  isManager:isMen,
  setisManager:setisMa,
  corentUser:curentu,
  setcurentUser:setcurentu,
  yPurchase:myPurchase,
  etMyPurchase:setMyPurchase,
  totalPrice:totalPrice,
  settotalPrice:settprice,
  listCust:listCust,
  setlistcust:setlistcust,
  pass:pass,
  setpass:setpass,
  isCust:isCust,
  setisCust,setisCust
}

  return (
    <div >
      <Myprovider value={store}>
    <BrowserRouter>
    <Menue></Menue>
    <MyRouting></MyRouting>
    </BrowserRouter>
    </Myprovider>
    </div>
  );
}

export default App;
