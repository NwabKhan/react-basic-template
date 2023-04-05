import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
    </div>
  )
}

export default About