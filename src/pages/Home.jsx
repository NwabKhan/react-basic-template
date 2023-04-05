import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact';
const Home = () => {
  return (
    <div>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Home