import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ news }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/news/${news.title} `, { state: news })}
      className='card'
    >
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <p>{news.author}</p>
      <p>Date:{news.publishedAt}</p>
      <img src={news.urlToImage} width={350} height={200} alt=''></img>
    </div>
  )
}

export default NewsCard
