import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const MarvelPage = () => {
  return (
    <div className='container'>
    <h1>MarvelPage</h1>
    <hr />

    <HeroesList publisher='Marvel Comics' />

  </div>
  )
}
