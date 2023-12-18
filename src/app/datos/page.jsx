import React from 'react'
import axiosUsuarios  from '../funciones/get'

export default  async function page() {
  const datos =  await axiosUsuarios("http://localhost:4000/habitaciones")
  console.log(datos)
  return (
    <div>page</div>
  )
}
