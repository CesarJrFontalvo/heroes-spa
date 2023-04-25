import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeroesAppPublic } from './HeroesAppPublic';
import { LoginPage } from '../auth';




 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesAppPublic />,
    children: [


      {
        path: '/',
        element: <LoginPage />,
      },
      
      {
        path: '/*',
        element: <Navigate to='/' />,
      }
    ],
  }
]);

export const AppRouterPublic = () => {
  return (
    <RouterProvider router={router}/>
  )
}
