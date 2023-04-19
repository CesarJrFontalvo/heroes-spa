import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui'

export const HeroesApp = () => {
    return (
        <div className='container'>
            {/* <Navbar /> */}
            <Outlet />
        </div>
    )
}
