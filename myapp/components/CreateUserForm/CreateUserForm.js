"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateUserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || email === '' || password === ''){
      toast.error("Fill all fields")
      return
  }

  if(password.length < 6){
      toast.error("Password must be at least 6 characters")
      return
  }

  try {
      const res = await fetch('http://localhost:3000/api/user', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({name, email, password})
      })

      console.log(await res.json())
      if(res.ok){
          toast.success("Successfully registered the user")
          setTimeout(() => {
              signIn()
          }, 1500)
          return
      } else {
          toast.error("Error occured while registering")
          return
      }
  } catch (error) {
      console.log(error)
  }
  };
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="border-gray-300">
       NewUser
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
          <button onClick={handleCloseModal} className="btn btn-secondary">
              Close
            </button>
            <h2 className="text-2xl mb-4">Create User Form</h2>
            <div>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button>Register</button>
                    <button onClick={() => signIn()}>
                        Don&apos;t have an account? <br /> Register now.
                    </button>
                </form>
            </div>
            <ToastContainer />
      <p className="text-red-500">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUserForm;
