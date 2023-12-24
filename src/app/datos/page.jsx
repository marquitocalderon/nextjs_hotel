import React from 'react'
import axiosUsuarios  from '../funciones/get'

export default  async function page() {
  const datos =  await axiosUsuarios("https://backendprueba-9rnj.onrender.com/habitaciones")
  console.log(datos)
  return (
    <div>page</div>
  )
}
