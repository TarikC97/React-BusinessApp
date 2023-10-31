import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Card.css'
import { useLocation } from 'react-router-dom'

const SingleProduct = () => {
  const [news, setNews] = useState({})
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d008bfc43d034feb936ceb976bd4c0a4`
      )
      .then((response) => setNews(response.data))
  }, [])
  const { state } = useLocation()
  console.log(state)
  return (
    <div className='mainSingle'>
      <div className='singleNews'>
        <img src={state.urlToImage} width={600} height={280} alt=''></img>
        <h3>{state.title}</h3>
        <p>{state.description}</p>
        <p>{state.author}</p>
        <p
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
          onClick={() => openInNewTab(`${state.url}`)}
        >
          More news...
        </p>
      </div>
    </div>
  )
}

export default SingleProduct
