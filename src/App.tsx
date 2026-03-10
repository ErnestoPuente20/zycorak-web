import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartDrawer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App