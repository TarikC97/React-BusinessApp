import React, { useState } from 'react'
import SearchList from './SearchList'
import './Card.css'

const Search = ({ details }) => {
  const [searchField, setSearchField] = useState('')

  const filteredNews = details.filter((news) => {
    return news.title.toLowerCase().includes(searchField.toLowerCase())
  })
  const handleChange = (e) => {
    setSearchField(e.target.value)
  }
  function searchList() {
    return <SearchList filteredNews={filteredNews} />
  }
  return (
    <>
      <div className='box'>
        <input
          className='input'
          placeholder='Search for News...'
          type='search'
          onChange={handleChange}
        />
      </div>
      <div>{searchList()}</div>
    </>
  )
}

export default Search
