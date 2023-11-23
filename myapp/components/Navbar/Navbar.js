import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth";
import {options} from "../../app/api/auth/[...nextauth]/options"

const Navbar = async () => {
  const session = await getServerSession(options)
  return (
    <header className='px-4 py-12'>
        <div className='flex justify-between max-w-screen-xl mx-auto'>
          <Link href={'/'}>OceanHarbor</Link>
          <div className='flex gap-4'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
          {session ? (
            <>
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            </>
          ) : (
            <>
            <Link href="/api/auth/signin">Login</Link>
            </>
          )}
          </div>
        </div>
    </header>
  )
}

export default Navbar