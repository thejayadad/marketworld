'use client'

import {signIn, signOut, useSession} from 'next-auth/react'

export default function DashboardLayout({ children }) {
    
    const {data: session} = useSession()

    if(!session){
        return <h2 className='text-center'>Not Authorized</h2>
    }

    return <section>
    <section className="grid grid-cols-1 lg:grid-cols-8 gap-4 p-4 max-w-screen-xl mx-auto">
            <span className=" col-span-1 md:col-span-2">
                <Aside />
            </span>
        <sppan className="col-span-6 min-h-screen">        
            {children}
    </sppan>

    </section>
    </section>
  }