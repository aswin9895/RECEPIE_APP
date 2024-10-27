import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchBar } from '../Redux/Slices/recepieSlice'

const Header = ({searchbar}) => {

  // searchKey dispatch
  const dispatch = useDispatch()
  return (
    <div style={{backgroundColor:"azure"}} className='d-flex justify-content-between align-items-center p-3'>
      <Link style={{textDecoration:"none"}} to={'/'}>
        <div className='d-flex align-items-center justify-content-around'>
        <i style={{fontSize:"30px",color:"DarkCyan"}} className="fa-solid fa-cookie"></i>
          <h5 style={{fontSize:"30px",color:"DarkCyan"}} className=' fw-bolder'>Yumly</h5>
        </div>
      </Link>
      <div className='d-flex align-items-center'>
        {
          searchbar &&
          <>
            <input onChange={e=>dispatch(searchBar(e.target.value.toLowerCase()))} style={{width:"250px",borderRadius:"30px"}} placeholder='Search By Cuisine' type="text" className='fw-bold form-control me-3 shadow' />
          </>
          }
      </div>
    </div>
  )
}

export default Header