import React from 'react'
import './Style.css'

const AboutUs = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='aboutUs'>
      <div className='aboutUs1'>
        <img src='myImg.jpg' width={550} height={450} alt='' />
      </div>
      <div className='aboutUs2'>
        <h1 style={{ fontStyle: 'italic' }}>About Me</h1>
        <h2>
          My name is Tarik Curic , I'm Software Engineering student at State
          University in Novi Pazar.
        </h2>
        <h2>I'm advanced university student with only one exam left.</h2>
        <h2>
          I have good knowledge of English Language, my hobies are solving Maths
          problems and Working on Computers.
        </h2>
        <h2>
          I have experience with many different technologies like
          JavaScript,NodeJS,React,Angular,PHP,Java and others.
        </h2>
        <h2>
          You can find on my Github Profile many Projects that i have worked on.
        </h2>
        <img
          onClick={() => openInNewTab('https://github.com/TarikC97')}
          src='github.png'
          alt=''
          width={70}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default AboutUs
