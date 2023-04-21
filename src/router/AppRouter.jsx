import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeroesAppPublic } from './HeroesAppPublic';
import { LoginPage } from '../auth';
// import { DCPage, MarvelPage } from '../heroes';

// import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';



 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesAppPublic />,
    children: [


      {
        path: 'login',
        element: <LoginPage />,
      },
      
      {
        path: '/',
        element: <Navigate to='/login' />,
      }
    ],
  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
