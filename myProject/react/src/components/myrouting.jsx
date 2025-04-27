import { Route, Routes } from "react-router-dom"

import { Home } from "./home"
import { Login } from "./login"
import { useState } from "react"
import { GameList } from "./gameList"
import { CategoryList } from "./categoryList"
import { ShoppingBasket } from "./shoppingBasket"
import { AddGame } from "./addGame"
import { AddCategory } from "./addCategory"
import { MoreDetails } from "./moreDetails"
import { ToUpdateGame } from "./toUpdateGaame"
import { ToUpdateCategory } from "./toUpdateCategory"
import { Registration } from "./registration"
import { MyShoppings } from "./personalArea"
import { ShoppingDetails } from "./shoppingDetails"


export const MyRouting=()=>{
  
    return <div>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}><Route path="/home/MoreDetails/:gameId" element={<MoreDetails></MoreDetails>}></Route></Route>
            
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="registration" element={<Registration></Registration>}></Route>
            <Route path="GameList" element={<GameList />}>
                    <Route path="add" element={<AddGame />} />
                    <Route path="toUpdateGate/:id" element={<ToUpdateGame />} />
                </Route>
                <Route path="CategoryList" element={<CategoryList/>}>
                    <Route path="addCategory" element={<AddCategory />} />
                    <Route path="toUpdateCategory/:id" element={<ToUpdateCategory />} />

                </Route>
            <Route path="ShoppingBasket" element={<ShoppingBasket></ShoppingBasket>}></Route>

            <Route path="myPersonal" element={<MyShoppings/>}>
                <Route path="ShoppingDetails/:id" element={<ShoppingDetails></ShoppingDetails>}/>
            </Route>
        </Routes>

    </div>
}