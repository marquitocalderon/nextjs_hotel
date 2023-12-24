"use client"
import React from 'react'
import {  useSession, signOut } from 'next-auth/react'
export default function page() {

  const { data: session } = useSession()
  return (
    <div>
            Hola {session?.user?.name} {session?.user?.email}
            <button className='px-4 py-2 bg-blue-500 text-center' onClick={ async ()=>  await signOut({callbackUrl: "/"})}>
          CERRAR GOOGLE
        </button>
    </div>
  )
}
