"use client"
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

const Page = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div>
      Hola {session?.user?.name} {session?.user?.email}
      <button className='px-4 py-2 bg-blue-500 text-center' onClick={handleSignOut}>
        CERRAR GOOGLE
      </button>
    </div>
  );
};

export default Page;
