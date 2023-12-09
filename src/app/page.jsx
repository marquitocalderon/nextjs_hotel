import Link from 'next/link'
import React, { Fragment } from 'react'

export default function page() {
  return (
    <Fragment>
      <header>
        <nav className='container mx-auto py-4 px-10 flex justify-between items-center'>
          <h1>HOTELES-TARAPOTO</h1>
           <ul className='flex gap-5'>
              <li>+00-000000</li>
              <li>alumno@alumno.unsm.edu.pe</li>
              <li>Tarapoto-Peru</li>
           </ul>
          <ul className='flex gap-2'>
             <Link className='px-5 py-2 bg-blue-600 hover:bg-blue-400 dark:text-white text-white rounded-sm' href={"/login"}>Login</Link>
             <Link  className='px-4 py-2 bg-green-500 hover:bg-green-400 dark:text-white text-white rounded-sm' href={"/registrarse"}>Registrar</Link>
          </ul>
        </nav>
      </header>
      <section>

      </section>
    </Fragment>
  )
}
