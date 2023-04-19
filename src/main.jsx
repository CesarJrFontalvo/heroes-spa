import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './styles.css'
import { AppRouter } from './router/AppRouter';
import { RoutesHero } from './heroes/routes/RoutesHero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RoutesHero />
      {/* <AppRouter/> */}
  </React.StrictMode>,
)
