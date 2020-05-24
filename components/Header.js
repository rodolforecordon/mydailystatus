import React from 'react'
import NavBar from '../components/NavBar'

const Header = () => {
    return (
        <div className='bg-gray-200'>
          <h1>
            <img className='h-10 mx-auto py-1' src='/logo.png' alt='Ola FSL!'/>
          </h1>
          <NavBar />
        </div>
    )
}

export default Header