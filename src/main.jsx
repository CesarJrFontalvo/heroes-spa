import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './styles.css'
import { HeroApp } from './HeroApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HeroApp/>
  </React.StrictMode>,
)
