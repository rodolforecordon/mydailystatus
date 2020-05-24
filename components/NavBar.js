import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children } ) => {
  return (
    <Link href={href} className=''>
      <a className='px-2 p-1 hover:bg-gray-500'>{children}</a>
    </Link>
  )
}

const NavBar = () => {
    return (
        <div className='bg-gray-400 text-center'>
          <NavLink href='/sobre'>Sobre</NavLink>
          <NavLink href='/cadastro'>Cadastro</NavLink>
          <NavLink href='/e ntrar'>Entrar</NavLink>
        </div>
    )
}

export default NavBar