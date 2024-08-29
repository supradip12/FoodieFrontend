import React from 'react'
import RestaurentLoginForm from './components/RestaurentLoginForm'
import { Link } from 'react-router-dom'
import ResHeader from './components/ResHeader'


const Restaurent = () => {
  return (
    <>
     <ResHeader/>
    <RestaurentLoginForm/>
  </>
  )
}

export default Restaurent