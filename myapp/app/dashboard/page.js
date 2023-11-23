import CreateUserForm from '@/(components)/CreateUserForm/CreateUserForm'
import React from 'react'

const Dashboard = () => {
  return (
    <section>
        <h1>Memebers section</h1>
        <div className='flex justify-between'>
            <CreateUserForm />
        </div>
    </section>
  )
}

export default Dashboard