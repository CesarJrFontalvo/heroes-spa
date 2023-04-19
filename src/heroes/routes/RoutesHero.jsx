import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeroesRoutes } from './HeroesRoutes';
import { DCPage, MarvelPage, SearchPage } from '../pages';
import { HeroesApp } from '../../HeroesApp';
import { LoginPage } from '../../auth';
import { Heropage } from '../pages/HeroPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesRoutes />,
    children: [
      {
        path: 'marvel',
        element: <MarvelPage />,
      },
      {
        path: 'dc',
        element: <DCPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'hero/:id',
        element: <Heropage />,
      },

      {
        path: '/',
        element: <Navigate to='/marvel' />,
      }

    ],
  },
  {
    path: '/',
    element: <HeroesApp />,
    children: [


      {
        path: 'login',
        element: <LoginPage />,
      },
      
      {
        path: '/',
        element: <Navigate to='/marvel' />,
      }
    ],
  }

]);
export const RoutesHero = () => {
  return (
    <RouterProvider router={router} />
  )
}
