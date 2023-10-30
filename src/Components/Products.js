import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
      {products.map((prod) => (
        <h1 key={prod.title}>
          Author:{prod.author}
          <br></br>
          Description:{prod.description}
          <br></br>
          Date:{prod.publishedAt}
          <br></br>
          <img src={prod.urlToImage} width={350}></img>
        </h1>
      ))}
    </div>
  )
}

export default Products
