import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllRecepies } from '../Redux/Slices/recepieSlice'

const View = () => {

  // state for holding recepies
  const [recepies, setRecepies] = useState({})

  const { id } = useParams()
  console.log(id);

  // const dispatch=useDispatch()
  useEffect(() => {
    if (sessionStorage.getItem("allRecepies")) {
      const allRecepies = JSON.parse(sessionStorage.getItem("allRecepies"))
      setRecepies(allRecepies?.find(item => item.id == id))
    }
  }, [])
  console.log(recepies);


  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className='pb-5 container'>
        <div className='d-flex justify-content-between  align-items-center'>
          <div>
            <img src={recepies?.image} width={"500px"} height={""} alt="" />
          </div>
          <div className='ms-5'>
            <h1 className='fw-bolder text-secondary fs-1'>{recepies?.name}</h1>
            <p className='text-secondary pt-4'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Ingredients :</span>{recepies?.ingredients}</p>
            <p className='text-secondary'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Cooking Time :</span> {recepies?.cookTimeMinutes} Minutes</p>
            <p className='text-secondary'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Difficulty :</span> {recepies?.difficulty}</p>
            <p className='text-secondary'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Cuisine :</span> {recepies?.cuisine}</p>
            <p className='text-secondary'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Meal Type :</span> {recepies?.mealType}</p>
            <p className='text-secondary'><span style={{ color: "lightSalmon", fontSize: "17px" }} className='fw-bolder'>Rating :</span> {recepies?.rating}</p>
          </div>
        </div>
      </div>
      <div className='text-center w-100 pb-5'>
        <h1 className='fw-bolder' style={{ color: "lightsalmon" }}>Instructions</h1>
        <p style={{fontSize:"17px",textAlign:"justify"}} className='text-secondary pt-4 container fw-bold'>{recepies?.instructions}</p>
      </div>
    </>
  )
}

export default View