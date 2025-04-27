import { useContext, useEffect, useState } from "react"
import mycont from "../mycontext"
import { ifCustomerInTheDB } from "../axios/custumeraxios"
import { useNavigate } from "react-router-dom"
import { getAllCustomers } from "../axios/custumeraxios"

export const  Login=()=>{
    const [user, setuser] = useState({})
    const listcust=useContext(mycont).listCust
    const setlistcust=useContext(mycont).setlistcust
  
    const n=useNavigate()
    //שליפה מהקונטקסט
    let isManager = useContext(mycont).setisManager
    let setpass = useContext(mycont).setpass
    let pass = useContext(mycont).pass
    let setcurentu=useContext(mycont).setcurentUser

  const doSomething = async () => {

   

        let y = (await getAllCustomers()).data;
        setlistcust(y)
       
        
    
}

useEffect(() => {
  doSomething()
},
  [])



  const f2=async()=>{
    let y=await ifCustomerInTheDB(user.name,user.pass)
if(y.data){
  alert(`ברוך הבא ${user.name}!`)
  setcurentu(user.name)
  setpass(user.pass)
}
else{
  alert("עליך להרשם תחילה")
  n("/registration")
}
}



    const f1=(use)=>{
      if(use.name=="manager" && use.pass=="1234"){
         isManager(true)
         setcurentu("מנהל")
         setpass("1234")
      }

      else{
       f2()
       isManager(false)
       
      }
    }


    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card" style={{ width: "400px", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
          <div className="card-body" style={{ textAlign: "center" }}>
            <h1 className="text-primary mb-4">התחברות</h1>
            
            <h2 className="text-secondary mb-3">שם משתמש</h2>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="הכנס שם"
              onBlur={(e) => setuser({ ...user, name: e.target.value })}
              style={{ backgroundColor: '#f8f8f8', borderColor: '#ff6f61' }}
            />
    
            <h2 className="text-secondary mb-3">סיסמא</h2>
            <input
              type="password"
              className="form-control mb-4"
              placeholder="הכנס סיסמא"
              onBlur={(e) => setuser({ ...user, pass: e.target.value })}
              style={{ backgroundColor: '#f8f8f8', borderColor: '#ff6f61' }}
            />
    
            <button
              onClick={() => f1(user)}
              className="btn btn-danger w-100"
              style={{ padding: "10px", fontSize: "16px", borderRadius: "5px" }}
            >
              התחבר
            </button>
          </div>
        </div>
      </div>
    );

}