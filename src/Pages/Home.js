import React from 'react'
import Products from '../Components/Products'
import './Style.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
        <h1>BusinessNews</h1>
      </div>
      <div className='products'>
        <Products />
      </div>
    </div>
  )
}

export default Home
