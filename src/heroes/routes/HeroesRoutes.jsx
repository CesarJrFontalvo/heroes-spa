import React from 'react'
import { Navbar } from '../../ui'
import { Outlet } from 'react-router-dom'



export const HeroesRoutes = () => {

    // const { pathname, search } = useLocation();
    // const lastPath = pathname + search;

    // localStorage.setItem('lastPath', lastPath);

    return (

        <>
            <Navbar />
            <div className='container'>
                <Outlet />
            </div>

        </>

    )
}
