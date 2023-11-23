'use client'
import CreateUserForm from '@/components/CreateUserForm/CreateUserForm'
import React from 'react'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import CreateProductForm from '@/components/CreateProductForm/CreateProductForm';

const Dashboard = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/api/auth/signin?callbackUrl=/dashboard");
        },
      });
  return (
    <section>
        <h1 className='text-center'>Memebers section</h1>
        <div className='flex justify-around mt-8'>
            <CreateUserForm />
            <CreateProductForm />
        </div>
        <div className='bg-red-300'>
            
        </div>
    </section>
  )
}

export default Dashboard