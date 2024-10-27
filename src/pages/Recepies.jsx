import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecepies } from '../Redux/Slices/recepieSlice'
import loadingImg from '../assets/6173a1aae8372541cfe858bbadccf1-unscreen.gif'
import noRecepie from '../assets/depositphotos_109143542-stock-illustration-emotion-icon-illustration-design-removebg-preview.png'

const Recepies = () => {

  const { allRecepies, loading, error } = useSelector(state => state.recepieReducer)
  // console.log(allRecepies, loading, error);

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const recepiePerPage = 8
  const totalPage = Math.ceil(allRecepies?.length / recepiePerPage)
  const lastrecepieIndex=currentPage*recepiePerPage
  const firstrecepieIndex=lastrecepieIndex-recepiePerPage
  const visiblerecepies=allRecepies?.slice(firstrecepieIndex,lastrecepieIndex)

  const moveNextPage=()=>{
    if (currentPage!=totalPage) {
      setCurrentPage(currentPage+1)
    }
  }
  const movePrevPage=()=>{
    if (currentPage!=1) {
      setCurrentPage(currentPage-1)
    }
  }


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllRecepies())
  }, [])

  return (
    <>
      <Header searchbar={true} />
      <div style={{ paddingTop: "100px", paddingBottom: "50px" }} className='d-flex justify-content-center flex-wrap px-4'>
        {
          loading ?
            <div className='d-flex justify-content-around align-items-center'>
              <h5 className='text-dark fw-bolder'>Loading</h5>
              <img width={"50px"} height={"30px"} className='img-fluid' src={loadingImg} alt="" />
            </div>
            :
            allRecepies?.length > 0 ?
              visiblerecepies?.map(recepies => (
                <>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='me-5 mb-3'>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img height={"200px"} variant="top" src={recepies?.image} />
                        <Card.Body className='text-center'>
                          <Card.Title className='fw-bolder'>{recepies?.name}</Card.Title>
                          <Link to={`/${recepies?.id}/view`}><Button style={{ backgroundColor: "gold", border: "none", }} className='fw-bold' variant="primary">Let's Cook!</Button></Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </>
              ))
              :
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img width={"200px"} height={"250px"} src={noRecepie} alt="" />
                <h1 className='text-dark fw-bolder'>No Recepies Are Available!!!</h1>
              </div>
        }
      </div>
      {
        allRecepies?.length>0&&
        <div className="text-center text-2xl font-bold mt-20 pb-5">
        <span onClick={movePrevPage} style={{cursor:"pointer"}}><i className="fa-solid fa-backward me-5"></i></span>
        <span className='fw-bolder'>{currentPage} Of {totalPage}</span>
        <span onClick={moveNextPage} style={{cursor:"pointer"}}><i className="fa-solid fa-forward ms-5"></i></span>
      </div>
      }
    </>
  )
}

export default Recepies