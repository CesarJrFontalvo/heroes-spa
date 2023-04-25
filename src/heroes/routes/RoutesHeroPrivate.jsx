import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HeroesRoutes } from './HeroesRoutes';
import { DCPage, MarvelPage, SearchPage } from '../pages';
import { Heropage } from '../pages/HeroPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesRoutes />,
    children: [
      {
        path: '/',
        element: <MarvelPage />,
      },
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
        path: '/*',
        element: <Navigate to='/marvel' />,
      }

    ],
  },

]);


export const RoutesHeroPrivate = () => {
  return (
    <RouterProvider router={router} />
  )
}
