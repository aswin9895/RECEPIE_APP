import React from 'react'
import homeImg from '../assets/ai-generated-8675560-removebg-preview.png'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


const Home = () => {
  return (
    <>
    <Header/>
      <div style={{minHeight:"90vh"}} className='container d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='fw-bolder text-dark'>Cook Like a Pro with <br />Our <span style={{color:"gold"}}>Easy</span> and <span style={{color:"gold"}}>Tasty</span><br />Recipes </h1>
          <p className='text-secondary'>From quick and easy meals to gourmet delights, we have something for every taste and occasion</p>
          <Link to={'/recepie'}><button style={{backgroundColor:"gold",border:"none",borderRadius:"10px",color:"white"}} className='fw-bolder px-3 py-2'>Explore all Recipes</button></Link>
        </div>
        <div>
          <img src={homeImg} alt="" />
        </div>
      </div>
    </>
   
  )
}

export default Home