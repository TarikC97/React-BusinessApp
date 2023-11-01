import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Card.css'
import Search from './Search'

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
    <div>
      <Search details={products} />
    </div>
  )
}

export default Products
