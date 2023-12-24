"use client"
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import React, { useEffect } from 'react';
import { signIn,signOut, useSession } from 'next-auth/react';


export default function BotonGoogleJSX() {
  return (
    <div className="flex justify-center items-center w-full">
      <button onClick={ 
          async()=> await signIn('google', { callbackUrl: '/inicio' })
          } className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-16 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
