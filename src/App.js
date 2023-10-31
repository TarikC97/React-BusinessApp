import './App.css'
import Products from './Components/Products'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import AboutUs from './Pages/AboutUs'
import SingleProduct from './Components/SingleProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/news/:title' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
