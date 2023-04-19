import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DCPage, MarvelPage } from '../heroes';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';



 
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <HeroesRoutes />,
  //   children: [
  //     {
  //       path: 'marvel',
  //       element: <MarvelPage />,
  //   },
  //   {
  //       path: 'dc',
  //       element: <DCPage />,
  //   },
    
  //   {
  //       path: '/',
  //       element: <Navigate to='/marvel' />,
  //   }
  
  //   ],
  // },
  {
    path: '/',
    element: <HeroesApp />,
    children: [
    {
        path: 'login',
        element: <LoginPage />,
    },
  
    ],
  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
