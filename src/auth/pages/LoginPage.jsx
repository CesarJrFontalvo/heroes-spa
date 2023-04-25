import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
 const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  // const lastPath = localStorage.getItem('lastPath') || '/';

  const onLogin = () => {
    login( 'Cesar Fontalvo' );
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className='mt-3'>
      <h1>LoginPage</h1>
      <hr />

      <button className='btn btn-primary'
        onClick={onLogin}
      >
        Login
      </button>

    </div>

  )
}
