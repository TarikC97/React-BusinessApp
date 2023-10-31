import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
import './Card.css'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d008bfc43d034feb936ceb976bd4c0a4'
      )
      .then((response) => setProducts(response.data.articles))
  }, [])
  console.log(products)
  return (
    <div className='products'>
      {products.map((news) => (
        <NewsCard news={news} key={news.title} />
      ))}
    </div>
  )
}

export default Products
