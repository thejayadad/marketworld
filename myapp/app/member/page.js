import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {options} from "../../app/api/auth/[...nextauth]/options"

import React from 'react'

const Members = async () => {
    const session = await getServerSession(options)
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/Member");
    }
  return (
    <section>
        <h2>Company Logo</h2>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
    </section>
  )
}

export default Members