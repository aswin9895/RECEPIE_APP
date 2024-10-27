import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home' 
import Recepies from './pages/Recepies' 
import View from './pages/View' 
import Pnf from './pages/Pnf' 

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recepie' element={<Recepies/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
