import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
import Search from '../Components/Search'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <img
        onClick={() => navigate('/')}
        src='trademark-solid.svg'
        style={{ cursor: 'pointer' }}
        width={100}
        alt=''
      ></img>
      <h2
        onClick={() => navigate('/aboutUs')}
        style={{ cursor: 'pointer', color: 'whitesmoke' }}
      >
        About Us
      </h2>
    </div>
  )
}

export default Header
