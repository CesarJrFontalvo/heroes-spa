import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../ui'

export const HeroesAppPublic = () => {
    return (
        <div className='container'>
            {/* <Navbar /> */}
            <Outlet />
        </div>
    )
}
