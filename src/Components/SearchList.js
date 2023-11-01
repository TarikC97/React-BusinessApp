import React from 'react'
import NewsCard from './NewsCard'
import './Card.css'

const SearchList = ({ filteredNews }) => {
  const filtered = filteredNews.map((news) => (
    <NewsCard key={news.title} news={news} />
  ))
  return (
    <div className='products'>
      {filtered.length > 0 ? filtered : <h1>No News by that Name!</h1>}
    </div>
  )
}

export default SearchList
