//import ReactDOM from "react-dom";
import { RouterProvider } from "react-router";
import { Router, routes } from "../presentation/routes/Routes";
import "../presentation/styles/global.scss"
//import style from "../presentation/styles/color.scss"

const teste =() =>{
  return(
    //<div className={style.container}></div>
    <div></div>
  )
}
/*ReactDOM.render(
    <Router/>,
    document.getElementById("root")
)*/

import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'

//import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux/es/exports"

//import { store } from './STORE/store'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Router/>
   
  </React.StrictMode>
)
