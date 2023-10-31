import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <p style={{ fontStyle: 'italic' }}>Copyrights Reserved to TC @2023</p>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default Footer
