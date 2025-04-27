
import {NavLink} from "react-router-dom"
import mycont from "../mycontext"
import { useContext } from "react"
export const  Menue=()=>{
  let us = useContext(mycont).isManager

  let name = useContext(mycont).corentUser
 
  const navLinkStyle = {
    backgroundColor: '#ff6f61',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };
  
  const activeLinkStyle = {
    backgroundColor: '#ff6f61',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '5px',
    fontWeight: 'bold',
    transform: 'scale(1.05)',
  };
  
  const hoverLinkStyle = {
    backgroundColor: '#ff908f',
    color: '#fff',
    transform: 'scale(1.05)',
  };
  





  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ff6f61" }}>
    <ul className="nav nav-tabs" style={{ backgroundColor: '#f4f0f4', padding: '10px 0', borderRadius: '8px' }}>
      
      <li className="nav-item">
        <NavLink className="nav-link" to={'home'} style={navLinkStyle}>דף הבית</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'login'} style={navLinkStyle}>התחברות</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'registration'} style={navLinkStyle}>הרשמה</NavLink>
      </li>
      
      {us && (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to={'GameList'} style={navLinkStyle}>רשימת משחקים</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'CategoryList'} style={navLinkStyle}>רשימת קטגוריות</NavLink>
          </li>
        </>
      )}
      
      <li className="nav-item">
        <NavLink className="nav-link" to={'ShoppingBasket'} style={navLinkStyle}>סל קניות</NavLink>
      </li>
      
      <li>  
        <NavLink className="nav-link" to={'myPersonal'} style={navLinkStyle}>האזור האישי של: {name}</NavLink>
      </li>


    </ul>

<div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}>
<img src="img/toys.webp" alt="Logo" style={{ height: "40px" }} />
</div>
</nav>
  );
      }
      
      