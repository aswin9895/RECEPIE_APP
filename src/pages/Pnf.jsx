import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"100px",flexDirection:"column",paddingBottom:"100px"}} className="d-flex justify-content-center align-items-center">
<h1 className="fw-bolder mb-2">ERROR 404</h1>
<img width={'300px'} height={'200px'} src='https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif' alt="" />
<h1 className="fw-bolder mb-2">Looks like You'r Lost.</h1>
<p className="mb-2">The Page You Are Looking For Is Not Available.</p>
<Link to={'/'} style={{backgroundColor:"gold"}} className=' btn mt-3 p-2 text-light rounded'>Home</Link>
      </div>
    </>
  )
}

export default Pnf